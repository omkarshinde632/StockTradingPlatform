import React from "react";
import { Link } from "react-router-dom";

const partners = [
  {
    id: 1,
    name: "TradeForge Themes",
    description: "Thematic investment platform with curated portfolios.",
  },
  {
    id: 2,
    name: "TradeForge Insights",
    description: "Real-time market insights and expert analysis.",
  },
  {
    id: 3,
    name: "TradeForge Connect",
    description: "Social trading and community engagement platform.",
  },
  {
    id: 4,
    name: "TradeForge Capital",
    description: "Capital management and portfolio advisory services.",
  },
  {
    id: 5,
    name: "TradeForge Academy",
    description: "Educational resources and trading tutorials.",
  },
  {
    id: 6,
    name: "TradeForge Mobile",
    description: "Trade on-the-go with our mobile apps.",
  },
];

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="mb-3">The TradeForge Universe</h1>
        <p className="text-muted fs-5">
          Enhance your trading and investing experience with our trusted partner platforms.
        </p>
      </div>

      <div className="row g-4">
        {partners.map(({ id, name, description }) => (
          <div key={id} className="col-md-4 col-sm-6">
            <div
              className="p-4 h-100 rounded shadow-sm bg-white"
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              <h5 className="mb-3">{name}</h5>
              <p className="text-muted" style={{ lineHeight: "1.6" }}>
                {description}
              </p>
              <button
                className="btn btn-outline-primary mt-3"
                style={{ borderRadius: "20px" }}
                onClick={() => alert(`Learn more about ${name}`)}
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          className="btn btn-primary btn-lg"
          style={{ width: "220px", borderRadius: "30px", fontWeight: "600" }}
          onClick={() => alert("Redirecting to Sign Up page...")}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
