import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }
    // Save user (in localStorage for now)
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/academy");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Forge Academy - Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary w-100">Sign Up</button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/Academylogin">Login</Link>
      </p>
    </div>
  );
}
