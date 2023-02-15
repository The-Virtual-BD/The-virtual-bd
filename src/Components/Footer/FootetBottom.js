import React from "react";
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";
import { ExternalLink } from "react-external-link";

function FootetBottom() {
  const date=new Date();
  const year=date.getFullYear();
  // console.log(year)
  return (
    <>
      <div className="footerVBottom">
        <p>
          <BiCopyright className="copy" />
          {year}
          <span>
            <ExternalLink href="https://thevirtualbd.com/">
              The Virtual BD
            </ExternalLink>
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default FootetBottom;
