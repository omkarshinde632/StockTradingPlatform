import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo & About */}
          <div className="col">
            <h2 style={{ fontWeight: "bold", color: "#007bff" }}>TradeForge</h2>
            <p>
              &copy; 2023 - 2025, TradeForge Ltd. All rights reserved.
            </p>
            <p>
              TradeForge is your all-in-one platform for trading, investing, and learning.
              Discover curated portfolios, study materials, and powerful tools to grow your
              financial knowledge.
            </p>
          </div>

          {/* Company Links */}
          <div className="col">
            <p className="fw-bold">Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/product">Products</a>
            <br />
            <a href="/pricing">Pricing</a>
            <br />
            <a href="/careers">Careers</a>
            <br />
            <a href="/blog">Blog</a>
            <br />
          </div>

          {/* Support Links */}
          <div className="col">
            <p className="fw-bold">Support</p>
            <a href="/contact">Contact</a>
            <br />
            <a href="/help-centre">Help Center</a>
            <br />
            <a href="/faq">FAQ</a>
            <br />
            <a href="terms-policies">Terms & Policies</a>
            <br />
          </div>

          {/* Account Links */}
          <div className="col">
            <p className="fw-bold">Account</p>
            <a href="/signup">Sign Up</a>
            <br />
            <a href="/login">Login</a>
            <br />
            <a href="/portfolio">Portfolio</a>
            <br />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Investments in securities, mutual funds, and other financial products are subject to market risks.
            Please read all related documents carefully before investing. TradeForge does not provide investment
            advice and is not responsible for any trading decisions made by users.
          </p>

          <p>
            All tools, analyses, and content provided are for educational and informational purposes only.
            Users should perform their own due diligence before making any investment decisions.
          </p>

          <p>
            Protect your account by keeping your credentials secure. TradeForge will never ask for your personal
            passwords. For any suspicious activity, please contact our support immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
