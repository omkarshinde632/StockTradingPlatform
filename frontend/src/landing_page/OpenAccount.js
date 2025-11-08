import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="display-5 mb-3 mt-5">Open a TradeForge Account</h1>
          <p className="lead mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link 
            to="/signup" 
            className="btn btn-primary btn-lg px-4 fs-5"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
