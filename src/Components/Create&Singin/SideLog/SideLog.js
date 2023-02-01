import React from "react";
import "./SideLog.css";
import backLog from "../../../Images/sign-in_back.jpg";
import { ExternalLink } from "react-external-link";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

import {FiTwitter} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

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
                <FiTwitter />
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://www.facebook.com/TheVirtualBD">
                <FaFacebook />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://instagram.com">
                <BsInstagram />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://youtube.com">
                <RiYoutubeLine className="fs-4" />
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
