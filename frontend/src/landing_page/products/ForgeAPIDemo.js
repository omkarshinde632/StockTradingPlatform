// ForgeAPIDemo.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgeAPIDemo() {
  const [symbol, setSymbol] = useState("");
  const [response, setResponse] = useState("");

  const handleFetchData = () => {
    // Simulated API call for demo
    setResponse(`Demo data for symbol: ${symbol || "AAPL"} fetched successfully!`);
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="mb-3">Forge API Demo</h1>
        <p className="text-muted fs-5">
          Test the Forge API in real-time. Enter a stock symbol and see how it works.
        </p>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Enter stock symbol (e.g., AAPL)"
            className="form-control mb-3"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
          <button className="btn btn-success w-100" onClick={handleFetchData}>
            Fetch Data
          </button>
        </div>
      </div>

      {response && (
        <div className="text-center mt-4">
          <h5>{response}</h5>
        </div>
      )}

      <div className="text-center mt-5">
        <Link to="/forge-api" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ForgeAPIDemo;
