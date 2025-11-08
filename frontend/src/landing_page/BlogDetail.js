// BlogDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "Introduction to Trading", content: "Full content for trading basics..." },
  { id: 2, title: "Technical Analysis 101", content: "Full content for technical analysis..." },
  { id: 3, title: "Risk Management in Trading", content: "Full content for risk management..." },
];

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <p className="text-center my-5">Blog post not found.</p>;

  return (
    <div className="container my-5">
      <h1 className="mb-3">{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog" className="btn btn-outline-primary mt-3">
        &larr; Back to Blog
      </Link>
    </div>
  );
}

export default BlogDetail;
