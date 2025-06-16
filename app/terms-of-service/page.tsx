/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { content } from "../content/text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service - ${content.domain} | Loan Agreement Terms`,
  description: "Read the terms of service for ScratchPay.com's loan matching service. Understand your rights and responsibilities when applying for loans through our platform.",
  keywords: "terms of service, loan agreement, loan terms, borrower agreement, loan matching service terms",
  alternates: {
    canonical: `https://${content.domain.toLowerCase()}/terms-of-service`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="my-container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Terms of Service - {content.domain}
            </h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> January 1, 2024<br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </header>
          
          <main className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using {content.domain}, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">2. Loan Matching Service Description</h2>
              <p className="text-gray-600 mb-4">
                {content.domain} is a loan matching service that connects potential borrowers with lenders in our network. 
                We are not a lender and do not make credit decisions. Key points about our loan matching service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We do not guarantee loan approval or specific terms</li>
                <li>Loan terms are determined by individual lenders</li>
                <li>Not all applicants will qualify for a loan</li>
                <li>We may receive compensation from lenders for successful referrals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">3. Loan Eligibility Requirements</h2>
              <p className="text-gray-600 mb-4">To use our loan matching service, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Be a U.S. citizen or permanent resident</li>
                <li>Have a valid Social Security Number</li>
                <li>Have a regular source of income (minimum $800/month)</li>
                <li>Have an active checking account in good standing</li>
                <li>Provide accurate and complete information in your loan application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate, current, and complete information in your loan application</li>
                <li>Maintain the security of your account information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our service only for lawful purposes</li>
                <li>Not attempt to circumvent our security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">You may not use our loan matching service to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Submit false or misleading information in loan applications</li>
                <li>Attempt to defraud lenders or our service</li>
                <li>Use automated systems to access our service</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                Our loan matching service is provided "as is" without any warranties, express or implied. We do not warrant that 
                our service will be uninterrupted, error-free, or completely secure. We disclaim all warranties 
                regarding the accuracy, reliability, or completeness of any information provided through our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                {content.domain} shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from your use of our service, including but not limited to damages for loss of profits, 
                data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>{content.domain}</strong><br />
                  Address: {content.address}<br />
                  Email: support@{content.domain.toLowerCase()}
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}