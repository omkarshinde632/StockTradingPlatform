import React from "react";

const holdings = [
  { id: 1, name: "Reliance Industries", type: "Stock", quantity: 50, currentValue: 75000 },
  { id: 2, name: "HDFC Bank", type: "Stock", quantity: 30, currentValue: 45000 },
  { id: 3, name: "ICICI Prudential", type: "Mutual Fund", units: 100, currentValue: 25000 },
];

function Portfolio() {
  const totalValue = holdings.reduce((acc, item) => acc + item.currentValue, 0);

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Portfolio</h1>
        <p className="text-muted fs-5">Track your investments, stocks, and mutual funds at a glance</p>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Total Investments</h5>
              <p className="card-text fs-3 fw-bold">₹{totalValue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Total Stocks</h5>
              <p className="card-text fs-3 fw-bold">{holdings.filter(h => h.type === "Stock").length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Total Mutual Funds</h5>
              <p className="card-text fs-3 fw-bold">{holdings.filter(h => h.type === "Mutual Fund").length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Quantity / Units</th>
              <th>Current Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((item, idx) => (
              <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.quantity || item.units}</td>
                <td className="fw-bold">{item.currentValue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="text-center mt-4">
        <a href="/" className="btn btn-outline-primary btn-lg">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
