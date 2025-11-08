import React from "react";
import { Link } from "react-router-dom";

function CurrentTakeovers() {
  return (
    <div className="container py-4">


      <h2 className="text-center fw-bold mb-4">
        Current Takeovers & Delisting – January 2024
      </h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted">
            Stay updated with the latest corporate actions in the Indian stock
            market. Below are the active takeovers and delisting offers for
            January 2024, as per exchange filings.
          </p>

          <h5 className="fw-semibold mt-3">Ongoing Takeovers</h5>
          <ul className="mb-4">
            <li>
              <strong>XYZ Technologies Ltd.</strong> – Open offer at ₹245 per
              share; closes 15 Jan 2024.
            </li>
            <li>
              <strong>Alpha Power Solutions</strong> – Acquisition by Beta
              Group; ₹112 per share; closes 22 Jan 2024.
            </li>
            <li>
              <strong>Nova Textiles Ltd.</strong> – Strategic buyout; ₹78 per
              share; closes 29 Jan 2024.
            </li>
          </ul>

          <h5 className="fw-semibold">Ongoing Delisting Offers</h5>
          <ul className="mb-4">
            <li>
              <strong>GreenLife Agro Ltd.</strong> – Voluntary delisting; floor
              price ₹320; bidding closes 18 Jan 2024.
            </li>
            <li>
              <strong>Urban Infra Projects</strong> – Exit offer for remaining
              shareholders; ₹45 per share; closes 25 Jan 2024.
            </li>
          </ul>

          <h6 className="fw-semibold text-primary">Note</h6>
          <ul className="small text-muted">
            <li>
              Dates and prices are based on official exchange notifications.
            </li>
            <li>
              Investors should verify details from BSE/NSE before taking action.
            </li>
            <li>
              Prices are subject to market conditions and regulatory approval.
            </li>
          </ul>
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

export default CurrentTakeovers;
