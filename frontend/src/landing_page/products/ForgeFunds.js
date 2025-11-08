import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgeFunds() {
  const navigate = useNavigate();

  // Sample funds data
  const allFunds = [
    {
      id: 1,
      name: "TradeForge Growth Fund",
      description: "High-growth equity fund focused on long-term capital appreciation.",
      risk: "High",
      returns: "12.5% (5Y CAGR)",
    },
    {
      id: 2,
      name: "TradeForge Balanced Fund",
      description: "Balanced equity and debt mix for moderate returns with lower volatility.",
      risk: "Moderate",
      returns: "8.3% (5Y CAGR)",
    },
    {
      id: 3,
      name: "TradeForge Debt Fund",
      description: "Conservative debt fund aiming for steady income with low risk.",
      risk: "Low",
      returns: "6.1% (5Y CAGR)",
    },
    {
      id: 4,
      name: "TradeForge International Fund",
      description: "Global equity fund investing in emerging and developed markets.",
      risk: "High",
      returns: "11.8% (5Y CAGR)",
    },
    {
      id: 5,
      name: "TradeForge Index Fund",
      description: "Low-cost fund tracking major market indexes for steady growth.",
      risk: "Moderate",
      returns: "7.9% (5Y CAGR)",
    },
  ];

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Filter and search funds dynamically
  const filteredFunds = allFunds.filter((fund) => {
    const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === "All" || fund.risk === riskFilter;
    return matchesSearch && matchesRisk;
  });

  // Handle subscription form submit
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="container my-5">
      {/* Page header */}
      <h1 className="mb-4 text-primary">Forge Funds</h1>
      <p className="lead mb-5">
        Explore a wide range of investment funds tailored to your financial goals and risk appetite.
      </p>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="Search funds by name..."
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
          >
            <option value="All">All Risk Levels</option>
            <option value="High">High Risk</option>
            <option value="Moderate">Moderate Risk</option>
            <option value="Low">Low Risk</option>
          </select>
        </div>
      </div>

      {/* Funds Grid */}
      <div className="row">
        {filteredFunds.length > 0 ? (
          filteredFunds.map((fund) => (
            <div key={fund.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="card-title">{fund.name}</h5>
                <p className="card-text">{fund.description}</p>
                <ul className="list-unstyled mb-3">
                  <li>
                    <strong>Risk:</strong> {fund.risk}
                  </li>
                  <li>
                    <strong>Returns:</strong> {fund.returns}
                  </li>
                </ul>
                <Link to={`/funds/${fund.id}`} className="btn btn-primary">
                  Learn More &nbsp;
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No funds match your criteria.</p>
        )}
      </div>

      {/* Newsletter Subscribe */}
      <div className="my-5 p-4 bg-light rounded shadow-sm">
        <h3>Subscribe to our Newsletter</h3>
        <p>Get updates on new funds, market insights, and exclusive offers.</p>
        <form onSubmit={handleSubscribe} className="d-flex flex-column flex-sm-row align-items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            Subscribe
          </button>
        </form>
        {subscribed && <p className="mt-3 text-success">Thank you for subscribing!</p>}
      </div>

      {/* FAQ Section */}
      <div className="my-5">
        <h3>Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is a mutual fund?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="faqOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                A mutual fund pools money from many investors to invest in stocks, bonds, or other securities, offering diversification and professional management.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How can I invest in Forge Funds?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faqTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can open an account with TradeForge and choose funds from our platform. Learn more by clicking “Learn More” on each fund card.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What are the risks involved?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="faqThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Investment risks vary by fund type. Higher risk funds may offer higher returns but can be volatile. Lower risk funds are more stable but usually offer lower returns.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
                      <Link to="/product" className="btn btn-outline-secondary">
                        &larr; Back to Products
                      </Link>
      </div>
    </div>
  );
}

export default ForgeFunds;
