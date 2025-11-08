import React from "react";

function TermsPolicies() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Terms & Policies</h1>

      <section className="mb-5">
        <h3>Terms of Use</h3>
        <p>
          By accessing and using TradeForge platforms, you agree to our terms
          and conditions. Use the services responsibly and adhere to all
          applicable laws. Unauthorized access, misuse of data, or
          exploitation of our services is strictly prohibited.
        </p>
      </section>

      <section className="mb-5">
        <h3>Privacy Policy</h3>
        <p>
          Your privacy is important to us. We collect, store, and process
          personal data to provide a secure and seamless trading experience.
          We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="mb-5">
        <h3>Cookie Policy</h3>
        <p>
          We use cookies to enhance your experience, analyze traffic, and
          provide personalized content. By using our site, you consent to the
          use of cookies according to our policy.
        </p>
      </section>

      <section className="mb-5">
        <h3>Disclaimer</h3>
        <p>
          Investments in securities and mutual funds involve risk. Past
          performance does not guarantee future results. TradeForge is not
          responsible for any financial losses incurred while using our
          platforms or services.
        </p>
      </section>

      <div className="text-center">
        <a href="/" className="btn btn-outline-primary btn-lg">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
}

export default TermsPolicies;
