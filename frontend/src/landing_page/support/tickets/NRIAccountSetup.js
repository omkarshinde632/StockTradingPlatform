import React from "react";
import { Link } from "react-router-dom";

function NRIAccountSetup() {
  return (
    <div className="container py-4">

      <h2 className="text-center fw-bold mb-4">NRI Account Setup</h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted">
            Non-Resident Indians (NRIs) can invest and trade in the Indian
            markets through TradeForge by opening an NRI trading and Demat
            account. As per RBI and SEBI guidelines, NRI accounts must be linked
            with a designated NRE or NRO bank account and a PIS (Portfolio
            Investment Scheme) permission letter.
          </p>

          <h5 className="fw-semibold mt-4">Account Types</h5>
          <ul>
            <li>
              <strong>NRE Account</strong> – Funds repatriable abroad. Used for
              investing in Indian markets with PIS compliance.
            </li>
            <li>
              <strong>NRO Account</strong> – Funds non-repatriable. Can be used
              to manage income earned in India like rent, dividends, etc.
            </li>
          </ul>

          <h5 className="fw-semibold mt-4">Required Documents</h5>
          <ul>
            <li>Copy of Passport (with address and visa page)</li>
            <li>Valid Overseas Address Proof</li>
            <li>Indian Address Proof (if applicable)</li>
            <li>PAN Card</li>
            <li>PIS Permission Letter from RBI (via designated bank)</li>
            <li>Cancelled Cheque of NRE/NRO Bank Account</li>
            <li>Photograph (signed across)</li>
          </ul>

          <h5 className="fw-semibold mt-4">Setup Process</h5>
          <ol>
            <li>Choose a designated bank for PIS approval (e.g., HDFC, ICICI).</li>
            <li>Apply for PIS permission through the bank.</li>
            <li>Submit the PIS letter and required documents to TradeForge.</li>
            <li>
              Once verified, we will open your NRI trading and Demat account.
            </li>
            <li>You can start investing in equities and mutual funds.</li>
          </ol>

          <h5 className="fw-semibold mt-4">Trading Segments Available</h5>
          <ul>
            <li>Equity Delivery (as per RBI norms)</li>
            <li>Mutual Funds</li>
            <li>Bonds and IPOs</li>
          </ul>

          <div className="mt-4">
            <Link to="/apply-nri" className="btn btn-primary btn-sm">
              Apply Now
            </Link>
          </div>

          <h6 className="fw-semibold text-primary mt-4">Note</h6>
          <p className="small text-muted">
            NRIs cannot participate in intraday or derivatives trading as per
            RBI guidelines. All transactions must be routed through the PIS
            account.
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

export default NRIAccountSetup;
