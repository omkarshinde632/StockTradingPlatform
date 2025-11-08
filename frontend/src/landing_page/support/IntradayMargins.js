import React from "react";
import { Link } from "react-router-dom";

function IntradayMargins() {
  return (
    <div className="container py-4">

      <h2 className="text-center fw-bold mb-4">Intraday Margins - TradeForge</h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted mb-4">
            TradeForge offers competitive intraday margin facilities across
            multiple segments, designed to maximise opportunities while managing
            risks. All margins comply with SEBI guidelines.
          </p>

          <h5 className="fw-semibold mt-3">Equity Intraday (MIS)</h5>
          <ul className="mb-3">
            <li>Up to 5x leverage on select stocks.</li>
            <li>Square-off: 3:15 PM IST.</li>
            <li>Dynamic margins in volatile markets.</li>
          </ul>

          <h5 className="fw-semibold">F&O (Equity, Currency, Commodity)</h5>
          <ul className="mb-3">
            <li>Margins per SPAN + Exposure rules.</li>
            <li>Extra leverage for intraday in select contracts.</li>
            <li>Auto square-off before close.</li>
          </ul>

          <h6 className="fw-semibold text-primary mt-4">Important</h6>
          <ul className="small text-muted">
            <li>Margins are collected upfront as per SEBI rules.</li>
            <li>Intraday leverage amplifies both gains and losses.</li>
            <li>May change during high volatility or special events.</li>
          </ul>

          <p className="small mt-3 mb-0">
            For live margin requirements, check our{" "}
            <strong>Margin Calculator</strong> in your dashboard.
          </p>
        </div>
      </div>
        <div class="text-center mb-5 mt-5">
                      {/* support Button */}
                    <Link to="/support" className="btn btn-outline-primary btn-lg">
                      ⬅ Back to support
                    </Link> &nbsp;&nbsp;&nbsp;
                     {/* Home Button */}
                    <Link to="/" className="btn btn-outline-primary btn-lg">
                      ⬅ Back to Home
                    </Link>
        </div>
    </div>
  );
}

export default IntradayMargins;
