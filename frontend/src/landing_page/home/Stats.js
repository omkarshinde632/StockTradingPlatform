import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Welcome to TradeForge</h1>
          <h2 className="fs-4">Customer-focused from day one</h2>
          <p className="text-muted">
            We’re building a community of traders and investors who value transparency, simplicity, and smart tools.
          </p>

          <h2 className="fs-4">No gimmicks, just real value</h2>
          <p className="text-muted">
            Our platform is designed to provide clean, reliable features without unnecessary distractions or pushy notifications.
          </p>

          <h2 className="fs-4">Growing the TradeForge ecosystem</h2>
          <p className="text-muted">
            We aim to develop a full suite of trading and investment tools tailored to beginner and intermediate users.
          </p>

          <h2 className="fs-4">Empowering your financial journey</h2>
          <p className="text-muted">
            With TradeForge, you’ll get easy-to-use tools and resources to help you learn and trade confidently.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="media/forgeeco.jpg"
            alt="TradeForge Ecosystem"
            style={{ width: "100%", height:"70%"}}
          />
          <div className="text-center mt-1">
            <a href="/product" className="mx-3" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="mx-3" style={{ textDecoration: "none" }}>
              Try TradeForge Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
