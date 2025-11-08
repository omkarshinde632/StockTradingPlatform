import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact TradeForge</h1>
        <p className="text-muted fs-5">
          Have questions or need assistance? Send us a message and we'll get back to you promptly.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
            {["name", "email", "message"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label text-capitalize">{field}</label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    className="form-control"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <textarea
                    className="form-control"
                    name={field}
                    rows="5"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  ></textarea>
                )}
              </div>
            ))}
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>

          <div className="mt-5 text-center text-muted">
            <p>Email: <a href="mailto:support@tradeforge.com">support@tradeforge.com</a></p>
            <p>Call: +91 12345 67890</p>
            <p>Address: TradeForge HQ, Mumbai, India</p>
            <Link to="/" className="btn btn-outline-primary mt-3">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
