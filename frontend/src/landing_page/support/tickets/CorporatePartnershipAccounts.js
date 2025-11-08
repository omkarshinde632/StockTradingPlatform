import React from "react";
import { Link } from "react-router-dom";

function CorporatePartnershipAccounts() {
  return (
    <div className="container py-4">


      <h2 className="text-center fw-bold mb-4">
        Corporate or Partnership Accounts
      </h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted">
            Corporate and Partnership accounts are designed for businesses,
            LLPs, and registered firms that want to trade and invest through
            TradeForge. These accounts require specific documentation and
            authorization to comply with SEBI and exchange guidelines.
          </p>

          <h5 className="fw-semibold mt-4">Eligibility</h5>
          <ul>
            <li>Private Limited Companies, LLPs, Partnerships</li>
            <li>Registered under Indian Companies/Partnership Act</li>
            <li>Valid business PAN and GST registration (if applicable)</li>
          </ul>

          <h5 className="fw-semibold mt-4">Required Documents</h5>
          <ul>
            <li>Certificate of Incorporation / Partnership Deed</li>
            <li>Board Resolution authorizing account opening</li>
            <li>PAN Card of the entity and authorized signatories</li>
            <li>Address proof of the entity (Electricity bill, Telephone bill, etc.)</li>
            <li>KYC documents of all directors/partners</li>
            <li>Latest shareholding pattern (for companies)</li>
          </ul>

          <h5 className="fw-semibold mt-4">Trading Segments Available</h5>
          <ul>
            <li>Equity Delivery & Intraday</li>
            <li>Equity Futures & Options</li>
            <li>Currency Derivatives</li>
            <li>Commodity Derivatives</li>
          </ul>

          <h5 className="fw-semibold mt-4">How to Apply</h5>
          <ol>
            <li>Download the corporate account opening form from our website.</li>
            <li>Fill in required details and attach necessary documents.</li>
            <li>Send the complete application to our registered office.</li>
            <li>Post-verification, your account will be activated within 3–5 working days.</li>
          </ol>

          <div className="mt-4">
            <Link to="/apply-now" className="btn btn-primary btn-sm">
              Apply Now
            </Link>
          </div>

          <h6 className="fw-semibold text-primary mt-4">Note</h6>
          <p className="small text-muted">
            All corporate and partnership accounts must adhere to SEBI KYC
            norms. Incomplete documentation may result in application delays.
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

export default CorporatePartnershipAccounts;
