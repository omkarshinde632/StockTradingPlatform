// ForgeAPI.jsx
import React from "react";
import { Link } from "react-router-dom";

function ForgeAPI() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="mb-3">Forge API</h1>
        <p className="text-muted fs-5">
          Build your own trading apps and platforms using our simple and powerful HTTP/JSON APIs. Perfect for startups and developers.
        </p>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <h3 className="mb-3">Why use Forge API?</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Seamless integration with trading platforms</li>
            <li className="list-group-item">Access to real-time market data</li>
            <li className="list-group-item">Place orders programmatically</li>
            <li className="list-group-item">Supports multiple asset types: stocks, mutual funds, derivatives</li>
            <li className="list-group-item">Ideal for startups and developers</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-5">
        <Link to="/product" className="btn btn-primary mx-2">
          Go Back
        </Link>
         <Link to="/forge-api-demo" className="btn btn-primary mx-2">
          Try Demo
        </Link>
      </div>
    </div>
  );
}

export default ForgeAPI;
