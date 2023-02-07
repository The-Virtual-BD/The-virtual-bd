import React,{useMemo, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SideLog from "../SideLog/SideLog";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import "./RegisterComp.css";
import LoginSocial from "./../../LoginSocial/LoginSocial";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { baseUrl } from "../../../hooks/url";
import countryList from "react-select-country-list";
import Select from 'react-select';

function RegisterComp() {
  const { register, handleSubmit,reset } = useForm();
  const navigate=useNavigate();
   const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    setValue(value)
  };
  // console.log(value)

  // console.log(nationality.label);

  const onSubmit = (data ,e)=>{
    e.preventDefault();

    data.nationality=value.label;

    console.log(data);

    //send to backend
   
    const url = `${baseUrl}/api/register`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
          if(result.error){
            console.log(result.error);
            toast.error("Register Failed");
          } else{
            console.log(result);
            const token=result.token;
            const user=JSON.stringify(result.user)
            

            // toast.success("Register Successfully!");
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("user", user);
            navigate('/user-dashboard')
          }
           
        })
  };


  return (
    <div>
      <section className="register">
        <Container className="back">
          <Row>
            <Col md={6}>
              <div className="form">
                <div className="log_form">
                  <div className="log_text">
                    <h2>Create your account</h2>
                  </div>
                  <div className="log_link">
                    <Link to="/sign-in">Login</Link>
                    <Link className="link_active" to="/register">
                      Register
                    </Link>
                  </div>


                  <div className="form_login">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="user">
                        <input type="text" placeholder="First Name" {...register("first_name")} required/>
                      </div>

                      <div className="user">
                        <input type="text" placeholder="Last Name"  {...register("last_name")} />
                      </div>

                      <div className="user">
                        <input type="email" placeholder="Email"  {...register("email")} />
                      </div>
                      
                      <div className="user">
                        <input 
                          type="text"  
                          placeholder="Date of Birth " 
                          {...register("birth_date")}  
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}/>
                      </div>

                      <div className="user">
                        <input type="text" placeholder="Profession" {...register("profession")} />
                      </div>

                      <div className="user">
                        <input type="tel" placeholder="Phone" {...register("phone")} />
                      </div>

                      <div className="user">
                        {/* <input type="text" placeholder="Nationality" {...register("nationality")} /> */}
                        <Select options={options} value={value} onChange={changeHandler} placeholder="Select Country"/>
                      </div>

                      <div className="user">
                        <input type="password" placeholder="Password" {...register("password")} />
                      </div>

                      <div className="user">
                        <input type="password" placeholder="Confirm Password " {...register("password_confirmation")} />
                      </div>

                      <div className="control_area">
                        <div className="remember">
                          <input type="checkbox" />
                          <label htmlFor="remember">
                            I agree to the terms & conditions
                          </label>
                        </div>
                      </div>

                      <div className="form_submit">
                        <button type="submit">REGISTER</button>
                      </div>
                    </form>




                    <div className="dont_account">
                      <Link to="/sign-in">
                        Aleready a member? <span>Login here.</span>
                      </Link>
                    </div>
                  </div>
                  <SocialLogIn />
                  <LoginSocial />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <SideLog />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default RegisterComp;
