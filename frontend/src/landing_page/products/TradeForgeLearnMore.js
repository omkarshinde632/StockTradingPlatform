import React from "react";
import { Link } from "react-router-dom";

function TradeForgeLearnMore() {
  return (
    <div className="container py-5">

      {/* Page Header */}
      <div className="text-center mb-5">
       <h1 className="mb-4 text-primary">TradeForge Pro</h1>
        <p className="lead">
          Learn more about our ultra-fast flagship trading platform.
        </p>
      </div>

      {/* Features Section */}
      <div className="mb-5 p-4 bg-light rounded shadow-sm">
        <h3 className="mb-3">Key Features</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Real-time market data for accurate trading decisions.</li>
          <li className="list-group-item">Advanced charting tools with multiple indicators.</li>
          <li className="list-group-item">Intuitive and responsive user interface.</li>
          <li className="list-group-item">Available on Android and iOS devices.</li>
          <li className="list-group-item">Seamless integration with TradeForge Dashboard.</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h4 className="mb-3">Get Started</h4>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Try Demo
          </a>
          <Link to="/product" className="btn btn-outline-secondary btn-lg">
            Back to Products
          </Link>
        </div>
      </div>

      {/* More Info Section */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h3 className="mb-3">Why Choose TradeForge Pro?</h3>
        <p>
          TradeForge Pro is designed for traders who demand speed, reliability, and powerful analytics.  
          With seamless synchronization across devices and advanced charting capabilities, it allows you to make smarter trading decisions faster.  
          Our platform ensures your portfolio is always under control with detailed reports and analytics.
        </p>
      </div>

    </div>
  );
}

export default TradeForgeLearnMore;
