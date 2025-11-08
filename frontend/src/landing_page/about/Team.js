import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Founder Section */}
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Image */}
        <div className="col-6 p-3 text-center">
          <img
            src="media/omkar.jpg"
            alt="Omkar Shinde - Founder & CEO"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Omkar Shinde</h4>
          <h6>Founder & CEO, TradeForge</h6>
        </div>

        {/* Bio */}
        <div className="col-6 p-3">
          <p>
            Omkar founded TradeForge in 2023 with a vision to make trading and
            investing transparent, accessible, and technology-driven for
            everyone in India. Having experienced the challenges of the Indian
            markets firsthand, he set out to build a platform that combines
            low-cost trading with cutting-edge tools.
          </p>
          <p>
            Under his leadership, TradeForge has grown to serve many
            clients, redefining how retail investors participate in the markets
            through innovation, trust, and education.
          </p>
          <p>When not discussing market trends, Omkar enjoys acting and playing cricket.</p>
          <p>
            Connect on{" "}
            <a href="https://omkarshinde632.github.io" target="_blank" rel="noopener noreferrer">
              Homepage
            </a>{" "}
            /{" "}
            <a href="https://linkedin.com/in/omkar-shinde-627a11347" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
