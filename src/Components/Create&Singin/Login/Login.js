import React from "react";
import "./Login.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideLog from "../SideLog/SideLog";
import SocialLogIn from "./../SocialLogIn/SocialLogIn";
import LoginSocial from "../../LoginSocial/LoginSocial";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data ,e)=>{
    e.preventDefault();
    console.log(data);
  
  }



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

                      <div className="user">
                        <input type="text" placeholder="email" {...register("email")}/>
                      </div>

                      <div className="pass">
                        <input type="password" placeholder="Password" {...register("password")}/>
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
