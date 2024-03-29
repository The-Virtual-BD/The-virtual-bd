import React from "react";
import "./CareerHero.css";

function CareerHero({children}) {
  return (
    <>
      <div className="career_banner">
        <div className="career_text">
          <h2>{children}</h2>
        </div>
      </div>
    </>
  );
}

export default CareerHero;
