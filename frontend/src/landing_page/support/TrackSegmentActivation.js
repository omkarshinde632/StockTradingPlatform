import React, { useState } from "react";
import { Link } from "react-router-dom";

function TrackSegmentActivation() {
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    // Mock status (replace with backend fetch later)
    if (panNumber && email) {
      setStatus(
        "Your segment activation request is under review. Expected activation within 48 hours."
      );
    } else {
      setStatus("Please enter valid details.");
    }
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Track Segment Activation</h1>

      <div className="row justify-content-center">
        <div className="col-md-6 border p-4 rounded shadow-sm">
          <form onSubmit={handleTrack}>
            <div className="mb-3">
              <label className="form-label">PAN Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your PAN Number"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
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

            <button type="submit" className="btn btn-primary btn-sm w-100">
              Track Activation
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

export default TrackSegmentActivation;
