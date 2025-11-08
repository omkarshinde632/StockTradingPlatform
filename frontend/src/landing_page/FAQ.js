import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "How do I open an account?",
      answer: "Click on 'Open Account' in the navbar and fill out the form.",
    },
    {
      question: "Is there any brokerage fee?",
      answer: "We have zero commission on direct mutual funds and flat fees for trading.",
    },
    {
      question: "Can I access courses from mobile?",
      answer: "Yes! Forge Academy is fully accessible on Android and iOS devices.",
    },
    // add more FAQ items
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, idx) => (
          <div className="accordion-item" key={idx}>
            <h2 className="accordion-header" id={`heading${idx}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${idx}`}
                aria-expanded="false"
                aria-controls={`collapse${idx}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${idx}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${idx}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
