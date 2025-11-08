import React from "react";
import { Link } from "react-router-dom";

function IntradayLeverages() {
  return (
    <div className="container py-4">
      <h2 className="text-center fw-bold mb-4">
        Latest Intraday Leverages – MIS & CO
      </h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted">
            Here’s the latest margin information for intraday trades under MIS
            (Margin Intraday Square-off) and CO (Cover Order) as per exchange
            guidelines.
          </p>

          {/* MIS Leverage Table */}
          <h5 className="fw-semibold mt-3">MIS (Margin Intraday Square-off)</h5>
          <table className="table table-sm table-bordered mt-2">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Leverage</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equity – Intraday</td>
                <td>Up to 5x</td>
                <td>Varies by stock volatility & liquidity</td>
              </tr>
              <tr>
                <td>F&O – Index Futures</td>
                <td>~35% margin requirement</td>
                <td>Based on SPAN + Exposure margin</td>
              </tr>
              <tr>
                <td>F&O – Stock Futures</td>
                <td>~45% margin requirement</td>
                <td>Higher margin for high volatility scripts</td>
              </tr>
              <tr>
                <td>Currency Futures</td>
                <td>~2%–3% margin requirement</td>
                <td>Exchange determined</td>
              </tr>
            </tbody>
          </table>

          {/* CO Leverage Table */}
          <h5 className="fw-semibold mt-4">CO (Cover Order)</h5>
          <table className="table table-sm table-bordered mt-2">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Leverage</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equity – Intraday</td>
                <td>Up to 7x</td>
                <td>Stop-loss mandatory</td>
              </tr>
              <tr>
                <td>Index Futures</td>
                <td>~25% margin requirement</td>
                <td>Lower than MIS due to SL</td>
              </tr>
              <tr>
                <td>Stock Futures</td>
                <td>~35% margin requirement</td>
                <td>Varies by stock volatility</td>
              </tr>
            </tbody>
          </table>

          <h6 className="fw-semibold text-primary mt-4">Disclaimer</h6>
          <p className="small text-muted">
            Leverages are subject to change based on market volatility and SEBI
            regulations. Please verify latest margins on the broker's margin
            calculator before trading.
          </p>
        </div>
      </div>
        <div class="text-center mb-5 mt-5">
                      {/* support Button */}
                    <Link to="/support" className="btn btn-outline-primary btn-lg">
                      ⬅ Back to support
                    </Link> &nbsp;&nbsp;&nbsp;
                     {/* Home Button */}
                    <Link to="/" className="btn btn-outline-primary btn-lg">
                      ⬅ Back to Home
                    </Link>
        </div>
    </div>
  );
}

export default IntradayLeverages;
