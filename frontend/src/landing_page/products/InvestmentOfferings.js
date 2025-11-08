import React from "react";
import { Link } from "react-router-dom";

function InvestmentOfferings() {
  const offerings = [
    {
      title: "Stocks",
      description:
        "Buy and sell shares of leading companies with zero brokerage on delivery trades. Access real-time market data and advanced charting tools.",
      img: "/Media/stocks.png",
    },
    {
      title: "Mutual Funds",
      description:
        "Invest in top mutual funds with no commission. Choose from equity, debt, hybrid, and thematic funds to build a diversified portfolio.",
      img: "/Media/mutualfunds.png",
    },
    {
      title: "Derivatives",
      description:
        "Trade futures and options on stocks, indices, and currencies with low margins and transparent pricing.",
      img: "/Media/derivatives.png",
    },
    {
      title: "Commodities",
      description:
        "Access commodity markets including gold, silver, crude oil, and more with a secure and fast trading platform.",
      img: "/Media/commodities.png",
    },
    {
      title: "IPO Subscription",
      description:
        "Apply to upcoming IPOs directly from your account with ease and speed.",
      img: "/Media/ipo.png",
    },
  ];

  // Function to create URL-friendly keys by lowercasing and removing spaces
  const formatKey = (title) => title.toLowerCase().replace(/\s+/g, "");

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4" style={{ color: "#0047AB", fontWeight: "700" }}>
        Explore TradeForge Investment Offerings
      </h1>
      <p className="text-center text-muted mb-5" style={{ fontSize: "18px" }}>
        Discover a wide range of investment products tailored to meet your financial goals.
      </p>

      <div className="row">
        {offerings.map(({ title, description, img }, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm d-flex flex-column"
              style={{ borderRadius: "12px", border: "none", minHeight: "400px" }}
            >
              <img
                src={img}
                className="card-img-top"
                alt={title}
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title" style={{ color: "#0047AB", fontWeight: "600" }}>
                  {title}
                </h5>
                <p className="card-text text-muted flex-grow-1">{description}</p>
                <Link
                  to={`/investment-offerings/${formatKey(title)}`}
                  className="btn btn-primary mt-3"
                  style={{ backgroundColor: "#0047AB", border: "none" }}
                >
                  Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-primary">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}

export default InvestmentOfferings;