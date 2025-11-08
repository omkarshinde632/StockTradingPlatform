import React, { useState } from "react";
import { Link } from "react-router-dom";

function TrackAccount() {
  const [appId, setAppId] = useState("");
  const [status, setStatus] = useState("");

  const handleTrack = () => {
    // Later: Replace with actual API call
    if (appId === "ACC123") {
      setStatus("✅ Your account has been approved. Welcome to TradeForge!");
    } else if (appId === "ACC456") {
      setStatus("⏳ Your account is under review. Expected completion: 3 days.");
    } else {
      setStatus("❌ Application not found. Please check your Application ID.");
    }
  };

  return (
    <div className="container py-5">

      <h2>Track Your Account Opening</h2>
      <input
        type="text"
        placeholder="Enter Application ID"
        value={appId}
        onChange={(e) => setAppId(e.target.value)}
        className="form-control my-3"
        style={{ maxWidth: "400px" }}
      />
      <button className="btn btn-primary" onClick={handleTrack}>
        Track
      </button>
      {status && <p className="mt-3">{status}</p>}
      <br></br>
      <br></br>

      {/* Home Button */}
      <Link to="/support" className="btn btn-outline-primary btn-lg">
        ⬅ Back to Support
      </Link> &nbsp;&nbsp;&nbsp;

      {/* Home Button */}
      <Link to="/" className="btn btn-outline-primary btn-lg">
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default TrackAccount;
