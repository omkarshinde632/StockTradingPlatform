import React from "react";
import { Link } from "react-router-dom";

function AccountOpeningCharges() {
  return (
    <div className="container py-4">


      <h2 className="text-center fw-bold mb-4">Account Opening Charges</h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted">
            TradeForge offers competitive pricing for account opening with
            transparent, no-hidden-fee policies. Below is the detailed breakup
            of charges applicable for different account types.
          </p>

          <table className="table table-bordered mt-3">
            <thead className="table-light">
              <tr>
                <th>Account Type</th>
                <th>Opening Charges</th>
                <th>AMC (Annual Maintenance Charge)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equity Trading Account</td>
                <td>₹200 (One-time)</td>
                <td>₹300/year</td>
              </tr>
              <tr>
                <td>Demat Account</td>
                <td>₹150 (One-time)</td>
                <td>₹300/year</td>
              </tr>
              <tr>
                <td>Commodity Trading Account</td>
                <td>₹100 (One-time)</td>
                <td>₹250/year</td>
              </tr>
              <tr>
                <td>Combined Equity + Commodity + Demat</td>
                <td>₹400 (One-time)</td>
                <td>₹500/year</td>
              </tr>
              <tr>
                <td>NRI Trading + Demat Account</td>
                <td>₹500 (One-time)</td>
                <td>₹1000/year</td>
              </tr>
            </tbody>
          </table>

          <h5 className="fw-semibold mt-4">Important Notes</h5>
          <ul className="small text-muted">
            <li>All charges are inclusive of GST.</li>
            <li>
              Payment can be made online during the account opening process.
            </li>
            <li>
              AMC is auto-debited annually from your linked trading ledger.
            </li>
            <li>
              Special promotional offers may reduce or waive charges for a
              limited time.
            </li>
          </ul>

          <div className="mt-3">
            <Link to="/open-account" className="btn btn-primary btn-sm">
              Open Account Now
            </Link>
          </div>
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

export default AccountOpeningCharges;
