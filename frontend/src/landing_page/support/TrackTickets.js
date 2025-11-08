import React, { useState } from "react";
import { Link } from "react-router-dom";

function TrackTickets() {
  const [ticketId, setTicketId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    // Mock status result (in real project, fetch from backend)
    if (ticketId && email) {
      setStatus(
        "✅ Your ticket is currently being reviewed by our support team. Estimated resolution: 24 hours."
      );
    } else {
      setStatus("❌ Please enter valid ticket details.");
    }
  };

  return (
    <div className="container py-5 text-center mb-5">

      <h1 className="text-center mb-4">Track Your Support Ticket</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 border p-4 rounded shadow-sm">
          <form onSubmit={handleTrack}>
            <div className="mb-3">
              <label className="form-label">Ticket ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your ticket ID"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Track Ticket
            </button>
          </form>

          {status && (
            <div className="alert alert-info mt-4" role="alert">
              {status}
            </div>
          )}
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
    </div>
  );
}

export default TrackTickets;
