import React from "react";
import "./TopHeader.css";
import { Container } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import { BsClock, BsGeoAltFill } from "react-icons/bs";
import Logo from "../../Images/logo.jpg";
import Socialmedia from "../Socialmedia/Socialmedia";
import { Link } from "react-router-dom";
function TopHeader() {
  return (
    <>
      <Container>
        <div className="top_header">
          <div className="logo">
            <Link to="/home">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="info">
            <div className="location">
              <div className="location_icon">
                <BsGeoAltFill />
              </div>
              <div className="location_info">
                <p>
                  Home 315, Road 3,
                  <br /> Phase 2, Sonadanga R/A, <br /> Khulna 9100, Bangladesh
                </p>
              </div>
            </div>
            
            <div className="contuct">
              <div className="contuct_icon">
                <FaAddressBook />
              </div>
              <div className="contuct_info">
                <p>
                  contact@thevirtualbd.com
                  <br /> +880 1902-624501
                </p>
              </div>
            </div>

            <div className="time">
              <div className="time_icon">
                <BsClock />
              </div>
              <div className="time_info">
                <p>
                  Saturday - Thursday <br />
                  10:00 am - 06:00 pm
                </p>
              </div>
            </div>
          </div>

          <div className="social_link">
            <Socialmedia />
          </div>
        </div>
      </Container>
    </>
  );
}

export default TopHeader;
