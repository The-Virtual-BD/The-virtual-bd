import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo 2.png";
import google from "./logo/google.png";
import apple from "./logo/apple.png";
import Socialmedia from "../Socialmedia/Socialmedia";
import "./Footer.css";
import FootetBottom from "./FootetBottom";
import { baseUrl } from "../../hooks/url";
import { toast } from "react-toastify";

function Footer() {
  const[email,setSubscribe_email]=useState('')

   // Handle Subscribe Us Form
   const handleSubscribeForm=e=>{
    e.preventDefault();
    const emaiL={email};

    //send to backend
    const url=`${baseUrl}/api/newsSubscriber/store`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emaiL)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      if(result.message){
        toast.success(result.message);
        e.target.reset();
    }else{
        toast.error("Email Already Added");
    };
    })
};

  return (
    <>
      <footer className="footer_area">
        <Container>
          <div className="top_footer">
            <Row>
              <Col md={3}>
                <div className="fImage">
                  <img src={logo} alt="logo" className="footer-logo"/>
                </div>
                <div className="footer_text">
                  <p>
                    We are developing business idea with technology. Then we are
                    analyzing market how we can ranking up this start-up to top
                    level.
                  </p>
                  <div className="media_social">
                    <Socialmedia />
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="footer_contuct">
                  <h3>Contact Us</h3>
                  <p>
                    <span>Phone:</span> +880 1711 666 603
                  </p>
                  <p>
                    <span>Email:</span> contact@thevirtualbd.com
                  </p>
                  <p>
                    <span>Address: </span> Home 315, Road 3, Phase 2, Sonadanga
                    R/A, Khulna 9100, Bangladesh
                  </p>
                </div>
              </Col>

              <Col md={3}>
                <div className="quicLink">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>

                    <li>
                      <Link to="/career">Career</Link>
                    </li>

                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact"> Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/data-protection">Data Protection</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={3}>
                <div className="subsCribe">

                  <form onSubmit={handleSubscribeForm}>
                    <div className="email_form">
                      <input type="email" placeholder="Enter Your email" onChange={e=>setSubscribe_email(e.target.value)} required />
                    </div>
                    <button type="submit">Subscribe</button>
                  </form>

                  <p>
                    Be the first to find out about exclusive deals, the latest
                    Updates, and top trends.
                  </p>

                  <div className="paly_store">
                    <div className="googlePlay">
                      <Link to="/services">
                        <img src={google} alt="" />
                      </Link>
                    </div>

                    <div className="apple_store">
                      <Link to="/home">
                        <img src={apple} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* footer_bottom */}
        <FootetBottom />
      </footer>
    </>
  );
}

export default Footer;
