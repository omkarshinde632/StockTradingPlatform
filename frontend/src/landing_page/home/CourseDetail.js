import React from "react";
import { useParams, Link } from "react-router-dom";

/**
 * NOTE: courses data is duplicated here for simplicity.
 * For production, move courses to a shared module and import in both pages.
 */
const courses = [
  {
    id: 1,
    title: "Beginner's Guide to Stock Trading",
    description:
      "Get comfortable with market basics, order types, account setup and the first steps of investing.",
    image: "/media/course1.jpg",
    level: "Beginner",
    content: [
      "What is a stock?",
      "How exchanges work",
      "Order types & placing your first trade",
      "Simple strategies for beginners",
    ],
  },
  {
    id: 2,
    title: "Technical Analysis Masterclass",
    description:
      "Charts, indicators, trends and practical setups — read the market like a pro.",
    image: "/media/course2.jpg",
    level: "Intermediate",
    content: [
      "Candlesticks and patterns",
      "Support & resistance",
      "Indicators: RSI, MACD, MA",
      "Putting setups together",
    ],
  },
  {
    id: 3,
    title: "Options & Derivatives Trading",
    description:
      "Understand options, spreads, hedges and basic strategies to manage risk.",
    image: "/media/course3.jpg",
    level: "Advanced",
    content: [
      "Options basics",
      "Calls, puts & payoff diagrams",
      "Spreads & hedging",
      "Risk management",
    ],
  },
  {
    id: 4,
    title: "Long-term Investment Strategies",
    description:
      "Portfolio allocation, mutual funds, SIPs and principles for long-term wealth creation.",
    image: "/media/course4.jpg",
    level: "Beginner",
    content: [
      "Asset allocation",
      "Mutual funds & SIPs",
      "Value vs growth investing",
      "Long-term monitoring",
    ],
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id, 10));

  if (!course) {
    return (
      <div className="container my-5">
        <h2>Course not found</h2>
        <p>The course you requested doesn't exist.</p>
        <Link to="/academy" className="btn btn-secondary">
          ← Back to Academy
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
              style={{ objectFit: "cover", height: 300 }}
            />
            <div className="card-body">
              <h1 className="h3">{course.title}</h1>
              <p className="text-muted">{course.description}</p>

              <h5>Curriculum</h5>
              <ul>
                {course.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-4">
                <Link to="/signup" className="btn btn-primary me-2">
                  Enroll Now
                </Link>
                <Link to="/academy" className="btn btn-outline-secondary">
                  ← Back to Academy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: instructor / resources */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h6 className="mb-2">Course info</h6>
            <p className="mb-1">
              <strong>Level:</strong> {course.level}
            </p>
            <p className="mb-1">
              <strong>Duration:</strong> ~ {course.content.length * 20} mins
            </p>

            <hr />
            <h6>Resources</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none">
                  Download slides
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Practice worksheets
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Forum discussion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
