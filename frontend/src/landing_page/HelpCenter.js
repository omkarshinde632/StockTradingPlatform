import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I open an account?",
    answer:
      "To open an account, click on 'Open an Account' in the navigation bar and follow the registration steps. You will need KYC documents for verification.",
  },
  {
    question: "What are the fees for trading?",
    answer:
      "Our platform charges zero commission on equity delivery trades. Other charges vary based on the trading type. Visit the Pricing page for detailed information.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Click on 'Login' and then 'Forgot Password?' Follow the instructions sent to your registered email to reset your password.",
  },
  {
    question: "Can I access TradeForge on mobile?",
    answer:
      "Yes, our mobile apps are available for Android and iOS. You can trade, track portfolios, and access courses on-the-go.",
  },
];

function HelpCenter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">TradeForge Help Centre</h1>
        <p className="text-muted fs-5">
          Find answers to common questions and get help with our platform.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {faqs.map((faq, index) => (
            <div className="card mb-3 shadow-sm" key={index}>
              <div
                className="card-header bg-primary text-white"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="card-body">
                  <p className="mb-0">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 text-center">
            <p>
              Can't find what you're looking for? Reach out to our support team.
            </p>
            <Link to="/contact" className="btn btn-outline-primary me-3">
              Contact Support
            </Link>
            <Link to="/" className="btn btn-outline-secondary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
