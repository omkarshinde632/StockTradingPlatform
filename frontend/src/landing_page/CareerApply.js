// CareerApply.jsx
import React from "react";
import { Link } from "react-router-dom";

function CareerApply() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Apply for a Position at TradeForge</h1>
      <p>Fill out the form below and our HR team will get in touch with you.</p>

      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Resume</label>
          <input type="file" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>

      <div className="mt-3">
        <Link to="/careers">&larr; Back to Careers</Link>
      </div>
    </div>
  );
}

export default CareerApply;
