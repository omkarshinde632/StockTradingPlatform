import React from "react";
import { Link } from "react-router-dom";

function DashboardDetails() {
  // Sample dynamic features data
  const features = [
    {
      icon: "fa-chart-line",
      title: "Real-time Market Data",
      description:
        "Get instant updates on stock prices, indices, and market trends with live streaming data.",
    },
    {
      icon: "fa-file-alt",
      title: "Detailed Trade Reports",
      description:
        "Access comprehensive reports on your trades, including P&L summaries, order history, and tax documents.",
    },
    {
      icon: "fa-bell",
      title: "Custom Alerts & Notifications",
      description:
        "Set personalized alerts for price movements, trade executions, and news events to stay ahead.",
    },
    {
      icon: "fa-mobile-alt",
      title: "Mobile Optimized",
      description:
        "Seamlessly manage your portfolio on the go with our fully responsive mobile-friendly interface.",
    },
    {
      icon: "fa-cogs",
      title: "Integration with TradeForge Apps",
      description:
        "Connect your dashboard with other TradeForge products like Kite, Console, and Coin for a unified experience.",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-primary">TradeForge Dashboard</h1>
      <p className="lead">
        Your centralized hub for managing trades and investments. Analyze your portfolio, track market trends, and make smarter decisions with powerful tools designed for traders of all levels.
      </p>

      <div className="row my-5">
        <div className="col-md-6">
          <img
            src="/Media/tradeforge_dashboard.png"
            alt="TradeForge Dashboard"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="mb-3">Why Choose TradeForge Dashboard?</h3>
          <ul className="list-unstyled">
            {features.map(({ icon, title, description }, idx) => (
              <li key={idx} className="mb-4 d-flex">
                <i
                  className={`fas ${icon} fa-2x text-primary me-3`}
                  style={{ minWidth: "40px" }}
                ></i>
                <div>
                  <h5>{title}</h5>
                  <p className="mb-0 text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/product" className="btn btn-outline-primary btn-lg me-3">
          &larr; Back to Products
        </Link>
        <a
          href="https://dashboard.tradeforge.com/demo"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg"
        >
          Try Demo Now
        </a>
      </div>
    </div>
  );
}

export default DashboardDetails;
