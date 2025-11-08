import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1 style={{ fontWeight: "700", color: "#0047AB" }}>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5" style={{ fontSize: "18px" }}>
          Check out our{" "}
          <Link
            to="/investment-offerings"
            style={{ textDecoration: "none", color: "#0047AB", fontWeight: "600" }}
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
