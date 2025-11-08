import React from "react";
import { Link } from "react-router-dom";

function Charges() {
  // Sample dynamic data for charges
  const chargesList = [
    {
      service: "Equity Delivery",
      charge: "₹0",
      notes: "No brokerage charges on delivery trades."
    },
    {
      service: "Intraday Trades",
      charge: "₹20 per executed order",
      notes: "Flat fee irrespective of order size."
    },
    {
      service: "Futures & Options",
      charge: "₹20 per executed order",
      notes: "All brokerage charges included."
    },
    {
      service: "Currency Derivatives",
      charge: "₹20 per executed order",
      notes: "Flat fee across currency trades."
    },
    {
      service: "Commodity Trading",
      charge: "₹20 per executed order",
      notes: "Simple fixed charges for commodity trades."
    },
    {
      service: "Call & Trade / RMS auto-squareoff",
      charge: "₹50 + GST per order",
      notes: "Additional service charges apply."
    },
    {
      service: "Physical Contract Notes",
      charge: "₹20 per copy + courier charges",
      notes: "Optional for those who prefer physical copies."
    },
    {
      service: "NRI Account (non-PIS)",
      charge: "0.5% or ₹100 per order (whichever is lower)",
      notes: "Applicable on equity trades."
    },
    {
      service: "NRI Account (PIS)",
      charge: "0.5% or ₹200 per order (whichever is lower)",
      notes: "Applicable on equity trades."
    },
    {
      service: "Debit Balance Charge",
      charge: "₹40 per executed order",
      notes: "Charged if account is in debit balance."
    }
  ];

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4 text-center" style={{ fontWeight: "700", color: "#0047AB" }}>
        TradeForge: Detailed List of Charges
      </h1>
      <p className="text-center mb-5" style={{ fontSize: "18px", color: "#555" }}>
        Transparency is our priority. Below is a comprehensive breakdown of all charges associated with trading and account services at TradeForge. Please review carefully to make informed decisions.
      </p>

      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col" style={{ width: "35%" }}>Service</th>
              <th scope="col" style={{ width: "25%" }}>Charges</th>
              <th scope="col" style={{ width: "40%" }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {chargesList.map(({ service, charge, notes }, index) => (
              <tr key={index}>
                <td>{service}</td>
                <td>{charge}</td>
                <td>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-muted" style={{ fontSize: "14px", maxWidth: "700px", margin: "0 auto" }}>
        <p>
          * All charges are exclusive of applicable taxes and regulatory fees.
        </p>
        <p>
          * Charges may vary based on regulatory changes and are subject to revision.
        </p>
        <p>
          * Please refer to your account agreements for any additional fees or minimum balances that may apply.
        </p>
        <p>
          * We are committed to providing simple, transparent pricing with no hidden costs.
        </p>
      </div>

      <div className="text-center mt-5">
        <Link
          to="/pricing"
          className="btn btn-outline-primary"
          style={{ fontWeight: "600", fontSize: "16px", padding: "10px 30px" }}
        >
          &larr; Back to Pricing Overview
        </Link>
      </div>
    </div>
  );
}

export default Charges;
