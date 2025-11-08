import React from "react";
import { useParams, Link } from "react-router-dom";

const productDetails = {
  stocks: {
    title: "Stocks",
    description:
      "Buy and sell shares of leading companies with real-time data, advanced charts, and zero brokerage on delivery trades. Build your portfolio with confidence.",
    benefits: [
      "Zero brokerage on delivery",
      "Real-time market data",
      "Advanced charting tools",
      "Access to IPOs and dividends",
    ],
    img: "/Media/stocks.png",
  },
  mutualfunds: {
    title: "Mutual Funds",
    description:
      "Invest in a wide range of mutual funds, including equity, debt, and hybrid funds, with no commission and easy tracking.",
    benefits: [
      "No commission fees",
      "Diversified fund options",
      "Automatic SIP options",
      "Expert recommendations",
    ],
    img: "/Media/mutualfunds.png",
  },
  derivatives: {
    title: "Derivatives",
    description:
      "Trade futures and options on stocks, indices, and currencies with low margins and transparent pricing.",
    benefits: [
      "Low margin requirements",
      "Wide range of instruments",
      "Advanced order types",
      "Real-time risk management",
    ],
    img: "/Media/derivatives.png",
  },
  commodities: {
    title: "Commodities",
    description:
      "Access commodity markets including gold, silver, crude oil, and more with a secure and fast trading platform.",
    benefits: [
      "Wide commodity options",
      "Competitive pricing",
      "Secure trading platform",
      "Real-time market data",
    ],
    img: "/Media/commodities.png",
  },
  iposubscription: {
    title: "IPO Subscription",
    description:
      "Apply to upcoming IPOs directly from your account with ease and speed.",
    benefits: [
      "Easy IPO application",
      "Fast allotment updates",
      "Secure payment gateway",
      "Direct from your account",
    ],
    img: "/Media/ipo.png",
  },
};

function InvestmentDetail() {
  const { product } = useParams();
  const data = productDetails[product.toLowerCase()];

  if (!data) {
    return (
      <div className="container mt-5">
        <h2>Product Not Found</h2>
        <Link to="/investment-offerings" className="btn btn-primary mt-3">
          Back to Offerings
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 style={{ color: "#0047AB", fontWeight: "700" }}>{data.title}</h1>
      <img
        src={data.img}
        alt={data.title}
        style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
      />
      <p className="text-muted fs-5">{data.description}</p>

      <h4>Key Benefits</h4>
      <ul>
        {data.benefits.map((benefit, idx) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>

      <Link to="/investment-offerings" className="btn btn-outline-primary mt-4">
        &larr; Back to Offerings
      </Link>
    </div>
  );
}

export default InvestmentDetail;
