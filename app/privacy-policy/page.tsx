import React from "react";
import { content } from "../content/text";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="my-container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="text-gray-600 text-center mb-8">
              <strong>Effective Date:</strong> January 1, 2024<br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                apply for a loan, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal identification information (name, address, phone number, email)</li>
                <li>Financial information (income, employment details, bank account information)</li>
                <li>Social Security Number for identity verification and credit checks</li>
                <li>Device and usage information when you visit our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process and evaluate your loan application</li>
                <li>Connect you with potential lenders in our network</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Communicate with you about your application and our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Lenders in our network who may be able to provide you with loan products</li>
                <li>Service providers who assist us in operating our business</li>
                <li>Credit reporting agencies and verification services</li>
                <li>Law enforcement or regulatory agencies when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>File a complaint with relevant regulatory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>{content.domain}</strong><br />
                  Address: {content.address}<br />
                  Email: privacy@{content.domain.toLowerCase()}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}