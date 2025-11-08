import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Account Opening */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Open a Trading & Demat Account
          </a>
          <br />
          <a href="/corporate-part-accounts" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate or Partnership Accounts
          </a>
          <br />
          <a href="/nri-account-setup" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Setup
          </a>
          <br />
          <a href="/req-doc-verify" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Required Documents & Verification
          </a>
          <br />
          <a href="/acc-open-charges" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Opening Charges
          </a>
          <br />
        </div>

        {/* Trading & Investments */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Trading & Investments
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            How to Buy & Sell Stocks
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Using TradeForge Themes
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Investing in ETFs & Mutual Funds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Thematic Portfolio Management
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading Charges & Taxes
          </a>
          <br />
        </div>

        {/* Account Management */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Management
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Resetting Password & 2FA
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Updating KYC Details
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Changing Linked Bank Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Deactivating Your Account
          </a>
          <br />
        </div>

        {/* Funds & Payments */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Funds & Payments
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Adding Funds to Your Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdrawing Funds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Payment Failures & Refunds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges & Settlement Timelines
          </a>
          <br />
        </div>

        {/* Platform Support */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Platform Support
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            TradeForge Web Platform Guide
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mobile App Troubleshooting
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Order Execution Issues
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio Tracking Issues
          </a>
          <br />
        </div>

        {/* Regulations & Policies */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Regulations & Policies
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Terms & Conditions
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Privacy Policy
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Risk Disclosure
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Investor Protection
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
