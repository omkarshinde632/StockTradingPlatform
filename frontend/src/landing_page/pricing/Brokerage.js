import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 text-start">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul style={{ lineHeight: "2.5", fontSize: "14px" }} className="text-muted">
            <li>Call & Trade and auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via email.</li>
            <li>Physical contract notes available at ₹20 per copy (courier charges extra).</li>
            <li>NRI account (non-PIS): 0.5% or ₹100 per executed equity order, whichever is lower.</li>
            <li>NRI account (PIS): 0.5% or ₹200 per executed equity order, whichever is lower.</li>
            <li>If your account has a debit balance, ₹40 will be charged per executed order instead of ₹20.</li>
          </ul>
        </div>
        <div className="col-4 p-4 text-start">
          <Link to="/charges" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </Link>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            View detailed charges for various services including account opening, maintenance, transaction fees, and more. Our transparent pricing ensures no hidden surprises.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
