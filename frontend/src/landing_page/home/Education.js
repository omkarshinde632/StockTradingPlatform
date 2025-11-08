import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="/Media/forgeAcademy.png" style={{ width: "70%" }} alt="TradeForge Academy" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and Open Market Education</h1>
          <p>
            ForgeAcademy, our comprehensive online learning platform, covers everything 
            from the fundamentals of investing to advanced trading strategies — completely free.
          </p>
          <Link to="/academy" style={{ textDecoration: "none" }}>
            ForgeAcademy <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
          <p className="mt-5">
            ForgeTalks, India’s most engaging trading and investment community, 
            where market enthusiasts exchange ideas, insights, and strategies.
          </p>
          <Link to="/forgetalks" style={{ textDecoration: "none" }}>
            ForgeTalks <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;
