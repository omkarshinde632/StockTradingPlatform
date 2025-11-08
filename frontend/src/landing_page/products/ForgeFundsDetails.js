import React from "react";
import { Link } from "react-router-dom";

function ForgeFundsDetails() {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1>ForgeFunds</h1>
        <p className="text-muted fs-5">
          Invest in direct mutual funds online with zero commission. Manage your portfolio easily from your mobile or desktop.
        </p>
        <Link to="/forge-funds" className="btn btn-primary fs-5 mt-3">
          Try Demo
        </Link>
      </div>

      {/* Features Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4 p-3">
          <h4>Zero Commission</h4>
          <p className="text-muted">Invest in mutual funds without any extra charges or hidden fees.</p>
        </div>
        <div className="col-md-4 p-3">
          <h4>Mobile & Desktop</h4>
          <p className="text-muted">Manage your portfolio anytime, anywhere, on any device.</p>
        </div>
        <div className="col-md-4 p-3">
          <h4>Portfolio Insights</h4>
          <p className="text-muted">Track your investments and performance with easy-to-understand analytics.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-5">
        <h3 className="mb-4">How It Works</h3>
        <ul className="list-group">
          <li className="list-group-item">Sign up for a Forge account</li>
          <li className="list-group-item">Select your preferred mutual funds</li>
          <li className="list-group-item">Invest directly with zero commission</li>
          <li className="list-group-item">Track and manage your portfolio anytime</li>
        </ul>
      </div>

      {/* Back Button */}
      <div className="text-center mb-5">
        <Link to="/product" className="btn btn-outline-secondary">
          &larr; Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ForgeFundsDetails;
