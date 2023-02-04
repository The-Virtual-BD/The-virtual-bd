import React from "react";
import "./SideLog.css";
import backLog from "../../../Images/sign-in-img.jpg";
import { ExternalLink } from "react-external-link";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

import {FiTwitter} from "react-icons/fi";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import {AiFillInstagram } from "react-icons/ai";

function SideLog() {
  return (
    <>
      <div className="log_back">
        <div className="logimg">
          <img src={backLog} alt="" />
        </div>
        <div className="logSocial">
          <ul>
            <li>
              <ExternalLink href="https://twitter.com">
                <FaTwitterSquare />
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://www.facebook.com/TheVirtualBD">
                <FaFacebook />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://instagram.com">
                <FaInstagramSquare />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://youtube.com">
                <BsYoutube className="fs-4" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/company/thevirtualbd/?fbclid=IwAR2m8FL5D5L5m6wGU4-JNUfUp23_CN_HtRxDrRTJ0G3mPWaKu4VUUCK-WrI">
                <BsLinkedin />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideLog;
