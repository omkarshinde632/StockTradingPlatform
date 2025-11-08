import React from "react";
import { Link } from "react-router-dom";

function Careers() {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote / India" },
    { id: 2, title: "Backend Developer", location: "Remote / India" },
    { id: 3, title: "Product Manager", location: "Bengaluru, India" },
    { id: 4, title: "Content & Education Specialist", location: "Remote / India" },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#007bff" }}>
        Join TradeForge
      </h1>
      <p className="text-center text-muted mb-5">
        We are building India’s most engaging trading and learning platform. Explore
        opportunities to grow with us and make an impact.
      </p>

      <div className="row gy-4">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text text-muted">{job.location}</p>
                </div>
                <Link to="/careers/apply" className="btn btn-primary mt-3">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-primary">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Careers;
