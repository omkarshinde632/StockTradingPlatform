// Blog.jsx
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to Trading",
    date: "Aug 10, 2025",
    snippet: "Learn the basics of stock trading, market terms, and investment strategies.",
  },
  {
    id: 2,
    title: "Technical Analysis 101",
    date: "Aug 12, 2025",
    snippet: "Discover how charts, indicators, and trends can help in predicting market movements.",
  },
  {
    id: 3,
    title: "Risk Management in Trading",
    date: "Aug 14, 2025",
    snippet: "Understand how to manage risk and protect your capital while trading.",
  },
];

function Blog() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">TradeForge Blog</h1>
      <p className="text-center text-muted mb-5">
        Stay updated with trading strategies, market insights, and tutorials.
      </p>

      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="text-muted mb-3">{post.date}</p>
                <p className="card-text flex-grow-1">{post.snippet}</p>
                <Link to={`/blog/${post.id}`} className="btn btn-primary mt-auto">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
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

export default Blog;
