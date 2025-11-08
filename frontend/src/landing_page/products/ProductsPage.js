import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      <div className="container py-5">

        {/* TradeForge Pro */}
        <div className="mb-4 p-4 border rounded bg-light shadow-sm">
          <h3 className="mb-2">TradeForge Pro</h3>
          <p>Ultra-fast trading platform with real-time data, advanced charts, and intuitive UI for Android and iOS.</p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <a href="/pro-learn-more" className="btn btn-primary btn-sm">Learn More</a>
            <a href="http://localhost:3001" className="btn btn-outline-primary btn-sm">Try Demo</a>
            <a href="#" className="btn btn-success btn-sm">Google Play</a>
            <a href="#" className="btn btn-dark btn-sm">App Store</a>
          </div>
        </div>

        {/* TradeForge Dashboard */}
        <div className="mb-4 p-4 border rounded bg-light shadow-sm">
          <h3 className="mb-2">TradeForge Dashboard</h3>
          <p>Central dashboard to track trades and investments with analytics and detailed reports.</p>
          <a href="/products/dashboard" className="btn btn-primary btn-sm mt-2">Learn More</a>
        </div>

        {/* ForgeFunds */}
        <div className="mb-4 p-4 border rounded bg-light shadow-sm">
          <h3 className="mb-2">ForgeFunds</h3>
          <p>Invest in mutual funds online with zero commission. Manage your portfolio easily.</p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <a href="/forgefundsdetails" className="btn btn-primary btn-sm">Learn More</a>
            <a href="/forge-funds" className="btn btn-outline-primary btn-sm">Try Demo</a>
            <a href="#" className="btn btn-success btn-sm">Google Play</a>
            <a href="#" className="btn btn-dark btn-sm">App Store</a>
          </div>
        </div>

        {/* Forge API */}
        <div className="mb-4 p-4 border rounded bg-light shadow-sm">
          <h3 className="mb-2">Forge API</h3>
          <p>Build your own trading apps using simple and powerful HTTP/JSON APIs.</p>
          <a href="/forge-api" className="btn btn-primary btn-sm mt-2">Learn More</a>
        </div>

        {/* Forge Academy Mobile */}
        <div className="mb-4 p-4 border rounded bg-light shadow-sm">
          <h3 className="mb-2">Forge Academy Mobile</h3>
          <p>Learn stock market basics and advanced strategies with bite-sized lessons on Android and iOS.</p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <a href="/forge-academy-details" className="btn btn-primary btn-sm">Learn More</a>
            <a href="/academy" className="btn btn-outline-primary btn-sm">Try Demo</a>
            <a href="#" className="btn btn-success btn-sm">Google Play</a>
            <a href="#" className="btn btn-dark btn-sm">App Store</a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-5">
          <p className="lead">
            Interested in our technology stack? Explore the{" "}
            <a href="#" className="text-decoration-none fw-bold">TradeForge.tech blog</a> for the latest updates.
          </p>
        </div>
      </div>

      {/* Universe */}
      <Universe />
    </>
  );
}

export default ProductsPage;
