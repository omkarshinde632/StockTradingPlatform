import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="row py-5">
        <div className="col text-center">
          <h1 className="fs-2 fw-semibold">
            We redefined trading in India with transparent pricing
            <br />
            Now, TradeForge is setting new standards with innovation.
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="row border-top text-muted fs-5 lh-lg py-5">
        <div className="col-md-6 px-4">
          <p>
            TradeForge started operations on 15th April 2023 with a mission to
            eliminate the hidden costs, lack of transparency, and technological
            barriers that traders and investors faced in India. The name
            “TradeForge” reflects our vision — forging powerful trading
            experiences through technology and trust.
          </p>
          <p>
            Our competitive pricing, advanced platforms, and reliable support
            have quickly made us one of the fastest-growing brokers in India.
          </p>
          <p>
            Today, many clients execute trades daily using our
            ecosystem, contributing significantly to the daily retail trading
            volume in India.
          </p>
        </div>

        <div className="col-md-6 px-4">
          <p>
            Beyond trading, we are building an ecosystem to educate and empower
            investors at every level. From beginners to seasoned traders,
            TradeForge offers resources, insights, and community support to help
            you grow.
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              ForgeCapital
            </a>
            , our fintech investment and incubation arm, funds innovative
            startups aimed at advancing India’s financial markets.
          </p>
          <p>
            And we never stop innovating. Explore the latest updates on our{" "}
            <a href="#" className="text-decoration-none">
              blog
            </a>{" "}
            or read what the industry is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
