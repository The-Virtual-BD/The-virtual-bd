import React from "react";
import "./ContuctBtn.css";
import { Link } from "react-router-dom";

function ContuctBtn() {
  return (
    <>
      <div className="golobal_button">
        <div className="global_started_btn">
          <Link to="/user-dashboard">Get Started</Link>
        </div>
        <div className="global_contuct_btn">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default ContuctBtn;
