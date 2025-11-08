import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const allFunds = [
  {
    id: 1,
    name: "TradeForge Growth Fund",
    description:
      "High-growth equity fund focused on long-term capital appreciation.",
    risk: "High",
    returns: "12.5% (5Y CAGR)",
    details:
      "This fund invests primarily in large-cap growth stocks with a focus on technology, healthcare, and emerging sectors. Ideal for investors with a high-risk tolerance looking for long-term growth.",
  },
  {
    id: 2,
    name: "TradeForge Balanced Fund",
    description:
      "Balanced equity and debt mix for moderate returns with lower volatility.",
    risk: "Moderate",
    returns: "8.3% (5Y CAGR)",
    details:
      "This balanced fund combines equity and debt instruments to offer a moderate risk-return profile. Suitable for investors looking for steady growth with moderate risk.",
  },
  {
    id: 3,
    name: "TradeForge Debt Fund",
    description:
      "Conservative debt fund aiming for steady income with low risk.",
    risk: "Low",
    returns: "6.1% (5Y CAGR)",
    details:
      "A debt fund investing in government securities and corporate bonds to generate stable income. Great for risk-averse investors seeking capital preservation.",
  },
  {
    id: 4,
    name: "TradeForge International Fund",
    description:
      "Global equity fund investing in emerging and developed markets.",
    risk: "High",
    returns: "11.8% (5Y CAGR)",
    details:
      "This fund invests internationally across markets for diversification and growth. Suitable for experienced investors seeking global exposure.",
  },
  {
    id: 5,
    name: "TradeForge Index Fund",
    description:
      "Low-cost fund tracking major market indexes for steady growth.",
    risk: "Moderate",
    returns: "7.9% (5Y CAGR)",
    details:
      "A passively managed index fund tracking key indices, offering low fees and stable returns. Ideal for cost-conscious investors.",
  },
];

function FundDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fund = allFunds.find((f) => f.id === parseInt(id));

  if (!fund) {
    return (
      <div className="container my-5">
        <h3>Fund not found</h3>
        <Link to="/forge-funds" className="btn btn-secondary mt-3">
          Back to Funds List
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Improved Back Button */}
      <button
        className="btn btn-outline-primary mb-4"
        onClick={() => navigate(-1)}
        style={{ borderRadius: "30px", fontWeight: "500" }}
      >
        &#8592; Back
      </button>

      <h1>{fund.name}</h1>
      <p className="text-muted">{fund.description}</p>
      <ul>
        <li>
          <strong>Risk Level:</strong> {fund.risk}
        </li>
        <li>
          <strong>Returns:</strong> {fund.returns}
        </li>
      </ul>
      <p>{fund.details}</p>
      <button className="btn btn-primary mt-3">Invest Now</button>
    </div>
  );
}

export default FundDetails;
