/* eslint-disable react/no-unescaped-entities */
import React from &quot;react&quot;;
import { content } from &quot;../content/text&quot;;

export default function TermsOfService() {
  return (
    <div className=&quot;min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20&quot;>
      <div className=&quot;my-container&quot;>
        <div className=&quot;max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12&quot;>
          <h1 className=&quot;text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center&quot;>
            Terms of Service
          </h1>
          
          <div className=&quot;prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed&quot;>
            <p className=&quot;text-gray-600 text-center mb-8&quot;>
              <strong>Effective Date:</strong> January 1, 2024<br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>1. Acceptance of Terms</h2>
              <p className=&quot;text-gray-600&quot;>
                By accessing and using {content.domain}, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>2. Service Description</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                {content.domain} is a loan matching service that connects potential borrowers with lenders in our network. 
                We are not a lender and do not make credit decisions. Key points about our service:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 space-y-2&quot;>
                <li>We do not guarantee loan approval or specific terms</li>
                <li>Loan terms are determined by individual lenders</li>
                <li>Not all applicants will qualify for a loan</li>
                <li>We may receive compensation from lenders for successful referrals</li>
              </ul>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>3. Eligibility Requirements</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>To use our service, you must:</p>
              <ul className=&quot;list-disc pl-6 text-gray-600 space-y-2&quot;>
                <li>Be at least 18 years old</li>
                <li>Be a U.S. citizen or permanent resident</li>
                <li>Have a valid Social Security Number</li>
                <li>Have a regular source of income</li>
                <li>Have an active checking account</li>
                <li>Provide accurate and complete information</li>
              </ul>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>4. User Responsibilities</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>You agree to:</p>
              <ul className=&quot;list-disc pl-6 text-gray-600 space-y-2&quot;>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our service only for lawful purposes</li>
                <li>Not attempt to circumvent our security measures</li>
              </ul>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>5. Prohibited Uses</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>You may not use our service to:</p>
              <ul className=&quot;list-disc pl-6 text-gray-600 space-y-2&quot;>
                <li>Submit false or misleading information</li>
                <li>Attempt to defraud lenders or our service</li>
                <li>Use automated systems to access our service</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>6. Disclaimer of Warranties</h2>
              <p className=&quot;text-gray-600&quot;>
                Our service is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that 
                our service will be uninterrupted, error-free, or completely secure. We disclaim all warranties 
                regarding the accuracy, reliability, or completeness of any information provided through our service.
              </p>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>7. Limitation of Liability</h2>
              <p className=&quot;text-gray-600&quot;>
                {content.domain} shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from your use of our service, including but not limited to damages for loss of profits, 
                data, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className=&quot;text-xl sm:text-2xl font-semibold text-gray-800 mb-4&quot;>8. Contact Information</h2>
              <p className=&quot;text-gray-600&quot;>
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className=&quot;bg-gray-50 p-4 rounded-lg mt-4&quot;>
                <p className=&quot;text-gray-700&quot;>
                  <strong>{content.domain}</strong><br />
                  Address: {content.address}<br />
                  Email: support@{content.domain.toLowerCase()}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}