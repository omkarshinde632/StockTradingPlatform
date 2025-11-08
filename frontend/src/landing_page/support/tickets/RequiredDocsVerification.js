import React from "react";
import { Link } from "react-router-dom";

function RequiredDocsVerification() {
  return (
    <div className="container py-4">

      <h2 className="text-center fw-bold mb-4">
        Required Documents & Verification
      </h2>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <p className="text-muted">
            To comply with SEBI and RBI guidelines, all TradeForge accounts
            require a KYC verification process. This ensures your identity is
            validated and your account is linked to the correct banking
            channels.
          </p>

          <h5 className="fw-semibold mt-4">Mandatory Documents</h5>
          <ul>
            <li>PAN Card (Permanent Account Number)</li>
            <li>Proof of Address (Aadhaar, Passport, Voter ID, Utility Bill)</li>
            <li>Bank Proof (Cancelled Cheque or Passbook Copy)</li>
            <li>Passport-size Photograph (recent)</li>
          </ul>

          <h5 className="fw-semibold mt-4">Additional for NRI Accounts</h5>
          <ul>
            <li>Copy of Passport with Visa/Residence Permit</li>
            <li>Overseas Address Proof</li>
            <li>PIS Permission Letter from RBI (via designated bank)</li>
            <li>Cancelled Cheque of NRE/NRO Account</li>
          </ul>

          <h5 className="fw-semibold mt-4">Verification Process</h5>
          <ol>
            <li>Upload scanned copies of the required documents.</li>
            <li>Our verification team reviews them within 24–48 hours.</li>
            <li>
              If needed, you may receive a call for additional verification.
            </li>
            <li>
              Once approved, your account will be activated for trading and
              investments.
            </li>
          </ol>

          <div className="mt-4">
            <Link to="/upload-documents" className="btn btn-primary btn-sm">
              Upload Documents
            </Link>
          </div>

          <h6 className="fw-semibold text-primary mt-4">Important</h6>
          <p className="small text-muted">
            Please ensure that all documents are clear, valid, and not expired.
            Discrepancies or unclear scans may delay verification.
          </p>
        </div>
      </div>
      <div class="text-center mb-5 mt-5">
                                        {/* support Button */}
                                      <Link to="/support" className="btn btn-outline-primary btn-lg">
                                        ⬅ Back to support
                                      </Link> &nbsp;&nbsp;&nbsp;
                                       {/* Home Button */}
                                      <Link to="/" className="btn btn-outline-primary btn-lg">
                                        ⬅ Back to Home
                                      </Link>
                          </div>
    </div>
  );
}

export default RequiredDocsVerification;
