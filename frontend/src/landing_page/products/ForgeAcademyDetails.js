import React from "react";
import { Link } from "react-router-dom";

function ForgeAcademyDetails() {
  return (
    <div className="container my-5">
      {/* Header / Logo */}
      <header className="text-center mb-5">
        <h1 className="fw-bold" style={{ fontSize: "3rem", letterSpacing: "2px" }}>
          <span style={{ color: "#007bff" }}>Forge</span> Academy
        </h1>
        <p className="text-muted fs-5">
          Learn. Practice. Succeed in Trading & Investing
        </p>
      </header>

      {/* Academy Overview */}
      <section className="mb-5 text-center">
        <h3 className="fw-bold mb-3">Empowering Traders & Investors</h3>
        <p className="text-muted">
          Forge Academy provides interactive learning, expert guidance, and a
          community of traders to help you master investing and trading.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="row text-center gy-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3">
            <h5>Interactive Lessons</h5>
            <p className="text-muted">
              Bite-sized lessons covering beginner to advanced trading concepts.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3">
            <h5>Expert Guidance</h5>
            <p className="text-muted">
              Learn from experienced traders with real-world strategies.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100 p-3">
            <h5>Community Support</h5>
            <p className="text-muted">
              Connect with fellow learners, ask questions, and share ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-5">
        <Link to="/AcademySignup" className="btn btn-primary btn-lg px-5">
          Sign Up Now
        </Link>
      </section>

      {/* Back Links */}
      <div className="text-center mb-5">
        <Link to="/product" className="btn btn-outline-primary btn-lg me-3">
          &larr; Back to Products
        </Link>
        <Link to="/" className="btn btn-outline-primary btn-lg">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}


export default ForgeAcademyDetails;
