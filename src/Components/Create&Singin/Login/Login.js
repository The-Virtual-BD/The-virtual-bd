import React, { useEffect, useState } from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SideLog from "../SideLog/SideLog";
import SocialLogIn from "./../SocialLogIn/SocialLogIn";
import LoginSocial from "../../LoginSocial/LoginSocial";
import { useForm } from "react-hook-form";
import { baseUrl } from "../../../hooks/url";
import { toast } from "react-toastify";

function Login() {
  const { register, handleSubmit,reset, formState: { errors }} = useForm();
  const navigate=useNavigate();
  const [failedMsg,setFailedMsg]=useState('');

  //Slide to Top
  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  const onSubmit = (data ,e)=>{
    e.preventDefault();
    // console.log(data);


    const url = `${baseUrl}/api/login`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
          if(result.error){
            console.log(result);
            // toast.error(result.error);
            toast.error("Incorrect username or password");
            
            setFailedMsg(result.error)
          }else{
            console.log(result);
            const token=result.token
            const user=JSON.stringify(result.user)

            // toast.success("login Successfully!");
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("user", user);
            reset();

            navigate('/user-dashboard');
          }
          
           
        })
  
  };



  return (
    <>
      <section className="login">
        <Container className="back">
          <Row>
            <Col md={6}>
              <div className="form">
                <div className="log_form">
                  <div className="log_text">
                    <h2>Sign into your account</h2>
                  </div>
                  <div className="log_link">
                    <Link className="link_active" to="/sign-in">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </div>


                  <div className="form_login">
                    <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="user mb-0">
                        <input type="email" placeholder="Email" {...register("email", { required: true })}/>
                      </div>
                      {errors.email && (
                            <p className="text-danger mt-0 fs-6">*Email is required</p>
                          )}

                        <div className="mt-3 mb-3">
                          <div className="pass mb-0 ">
                              <input type="password" placeholder="Password" {...register("password", { required: true })}/>
                          </div>
                          {errors.password && (
                                <p className="text-danger mt-0 fs-6">*Password is required</p>
                              )}
                        </div>

                      <div className="control_area">
                        <div className="remember">
                          <input type="checkbox" />
                          <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="forgetPass">
                          <Link to="/">Forget Password?</Link>
                        </div>
                      </div>

                      <div className="form_submit">
                        <button type="submit">LOGIN</button>
                      </div>
                      

                    </form>


                    <div className="dont_account">
                      <Link to="/register">
                        Don’t have an account? <span> Register here</span>.
                      </Link>
                    </div>
                  </div>
                  <SocialLogIn />
                  <LoginSocial />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <SideLog className="log_gap" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
