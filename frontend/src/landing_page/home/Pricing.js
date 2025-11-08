import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Transparent Pricing</h1>
          <p>
            TradeForge offers straightforward, low-cost pricing for traders of all levels. No hidden fees, no surprises — just fair and flat rates.
          </p>
          <Link
            to="/pricing"
            className="btn btn-link p-0"
            style={{ textDecoration: "none" }}
          >
            View Full Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="col-2"></div>

        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-4 border rounded mx-2">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery trades <br />
                and direct mutual funds investment
              </p>
            </div>
            <div className="col p-4 border rounded mx-2">
              <h1 className="mb-3">₹20</h1>
              <p>Flat fee for Intraday & F&O trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
