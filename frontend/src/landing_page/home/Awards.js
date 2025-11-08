import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/awards2.svg"  style={{width: "80%",height:"100%" }}></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Building India's Most Trusted Trading Platform</h1>
          <p className="mb-5">
            TradeForge is a new-age platform built for traders and investors
            who want a simple, transparent, and cost-effective way to trade in
            India's markets.  You can invest and trade in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <img src="media/pressLogos.png" style={{ width: "90%" }} /> */}
        </div>
      </div>
    </div>
  );
}

export default Awards;