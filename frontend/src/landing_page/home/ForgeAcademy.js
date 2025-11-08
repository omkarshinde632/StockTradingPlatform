import React, { useState } from "react";
import AcademySignup from "./AcademySignup";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    title: "Stock Market Basics",
    description:
      "Learn the fundamentals of stock markets, terminology, and how to get started with investing.",
    img: "media/course1.jpg",
  },
  {
    id: 2,
    title: "Technical Analysis",
    description:
      "Understand charts, indicators, and tools to analyze stock price movements.",
    img: "media/course2.avif",
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    description:
      "Dive into company financials, earnings, and how to evaluate a stock's true value.",
    img: "media/course3.avif",
  },
  {
    id: 4,
    title: "Options Trading",
    description:
      "Learn the strategies and risks involved in options trading for better returns.",
    img: "media/course4.avif",
  },
];

const studyMaterials = [
  "PDF Guides",
  "Video Tutorials",
  "Cheat Sheets",
  "Case Studies",
  "Glossaries",
];

const practiceTests = [
  "Beginner Level Quizzes",
  "Intermediate Challenges",
  "Advanced Tests",
];

const webinars = [
  { id: 1, title: "Live Market Analysis", date: "Aug 15" },
  { id: 2, title: "Options Strategies", date: "Aug 20" },
  { id: 3, title: "Risk Management", date: "Aug 25" },
];

function ForgeAcademy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentView, setCurrentView] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function showCourseDetail(course) {
    setSelectedCourse(course);
    setCurrentView("courseDetail");
    window.scrollTo(0, 0);
  }

  function goHome() {
    setCurrentView("home");
    setSelectedCourse(null);
    window.scrollTo(0, 0);
  }

  function renderSection() {
    switch (currentView) {
      case "home":
        return (
          <>
            {/* Search */}
            <div className="input-group mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-primary"
                aria-label="Search courses"
                onClick={() => {}}
              >
                Search
              </button>
            </div>

            {/* Courses */}
            <h3 className="mb-4 text-center fw-bold">Popular Courses</h3>
            <div className="row gy-4">
              {filteredCourses.length === 0 && (
                <p className="text-center text-muted">No courses found.</p>
              )}
              {filteredCourses.map((course) => (
                <div className="col-md-3 col-sm-6" key={course.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={course.img}
                      className="card-img-top"
                      alt={course.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text flex-grow-1 text-truncate">{course.description}</p>
                      <button
                        className="btn btn-link p-0 mt-auto text-primary fw-semibold"
                        onClick={() => showCourseDetail(course)}
                      >
                        Learn More <i className="fa fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Study Materials */}
            <h3 className="mt-5 mb-4 text-center fw-bold">Study Materials</h3>
            <div className="row text-center gy-3 justify-content-center">
              {studyMaterials.map((item, idx) => (
                <div
                  className="col-md-2 col-6 border rounded p-3 bg-light d-flex flex-column align-items-center"
                  key={idx}
                >
                  <i className="fa fa-book fa-2x mb-2 text-primary"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Practice Tests & Quizzes */}
            <h3 className="mt-5 mb-4 text-center fw-bold">Practice Tests & Quizzes</h3>
            <div className="row text-center gy-3 justify-content-center">
              {practiceTests.map((test, idx) => (
                <div
                  className="col-md-3 col-8 border rounded p-4 bg-light"
                  key={idx}
                >
                  <i className="fa fa-pencil-square-o fa-3x mb-3 text-success"></i>
                  <h5>{test}</h5>
                  <button className="btn btn-outline-success mt-3 px-4">Start</button>
                </div>
              ))}
            </div>

            {/* Community & Discussions */}
            <h3 className="mt-5 mb-4 text-center fw-bold">Community & Discussions</h3>
            <div
              className="card shadow-sm mx-auto mb-5"
              style={{ maxWidth: "700px", padding: "2rem" }}
            >
              <div className="d-flex align-items-center mb-3">
                <i className="fa fa-users fa-3x text-primary me-3"></i>
                <h5 className="mb-0">Join the Discussion</h5>
              </div>
              <p className="mb-4">
                Connect with fellow traders and investors. Exchange ideas, ask questions,
                and get support from a friendly community passionate about trading.
              </p>
              <button className="btn btn-primary px-4">Join Now</button>
            </div>

            {/* Upcoming Webinars & Live Events */}
            <h3 className="mt-5 mb-4 text-center fw-bold">Upcoming Webinars & Live Events</h3>
            <div className="row gy-4 justify-content-center">
              {webinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="col-md-4 col-sm-6"
                >
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{webinar.title}</h5>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="badge bg-info text-dark" style={{ fontSize: "1rem" }}>
                          {webinar.date}
                        </span>
                        <button className="btn btn-outline-primary btn-sm">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signup Section */}
            <div className="mt-5 p-5 bg-primary text-white text-center rounded">
              <h4 className="mb-3">Join Forge Academy Today!</h4>
              <p className="mb-4">
                Sign up for free and kickstart your journey to mastering trading.
              </p>
               <Link to="/AcademySignup" className="btn btn-light btn-lg px-5">
                    Sign Up Now
               </Link>
            </div>
            <br></br>
            <div className="row-1 text-center mb-5">
                    <Link to="/product" className="btn btn-outline-primary btn-lg me-3">
                      &larr; Back to Products
                    </Link> &nbsp;&nbsp;&nbsp; 
                    <Link to="/" className="btn btn-outline-primary btn-lg me-3">
                      &larr; Back to Home
                    </Link>
            </div>
            
          </>
        );

      case "courseDetail":
        if (!selectedCourse) return null;
        return (
          <div style={{ maxWidth: "900px" }} className="mx-auto">
            <button
              className="btn btn-link mb-4"
              onClick={goHome}
              style={{ fontSize: "1.1rem" }}
            >
              ← Back to Courses
            </button>
            <div className="card mb-5 shadow">
              <img
                src={selectedCourse.img}
                className="card-img-top"
                alt={selectedCourse.title}
                style={{ height: "320px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2>{selectedCourse.title}</h2>
                <p>{selectedCourse.description}</p>
                <h5>What you will learn:</h5>
                <ul>
                  <li>Key concepts and fundamentals</li>
                  <li>Practical strategies</li>
                  <li>Real-world examples</li>
                  <li>Risk management tips</li>
                </ul>
                <button className="btn btn-primary btn-lg mt-3 px-5">Enroll Now</button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div className="container my-5">
      {/* Header / Logo */}
      <header className="text-center mb-5">
        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
            letterSpacing: "2px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <span style={{ color: "#007bff" }}>Forge</span> Academy
        </h1>
        <p className="text-muted fs-5">Learn. Practice. Succeed in Trading & Investing</p>
      </header>

      {/* Main Content */}
      {renderSection()}
    </div>
  );
}

export default ForgeAcademy;
