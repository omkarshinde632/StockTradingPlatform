import React, { useState, useEffect } from "react";

function ForgeTalks() {
  // Load saved posts or start empty
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("forgeTalksPosts");
    return saved ? JSON.parse(saved) : [];
  });
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("forgeTalksPosts", JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !content.trim()) return alert("Enter username and message");

    const newPost = {
      id: Date.now(),
      user: username.trim(),
      content: content.trim(),
    };
    setPosts([newPost, ...posts]);
    setUsername("");
    setContent("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this post?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h4 className="mb-4 text-center">
         <h1 style={{ fontWeight: "700", color: "#0047AB" }}>ForgeTalks</h1>
            India’s most engaging trading & investment community
      </h4>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="Share your market insights, questions or strategies..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>

      <div>
        {posts.length === 0 && <p>No posts yet. Be the first to share!</p>}
        {posts.map(({ id, user, content }) => (
          <div
            key={id}
            className="border rounded p-3 mb-3 position-relative"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <strong>{user}</strong>
            <p className="mb-0">{content}</p>
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-sm btn-danger position-absolute"
              style={{ top: "5px", right: "5px" }}
              title="Delete post"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForgeTalks;
