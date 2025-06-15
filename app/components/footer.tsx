"use client";

import React, { useState } from "react";
import Column from "./column";
import ButtonGetStart from "./button-get-start";
import { content } from "../content/text";
import Modal from "./modal";

type Props = {};

const Footer = (props: Props) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const ContactContent = () => (
    <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
      <div className="text-center mb-8">
        <p className="text-gray-600 text-lg">
          We're here to help! Get in touch with us for any questions or support.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* General Contact */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            General Inquiries
          </h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> info@{content.domain.toLowerCase()}</p>
            <p><strong>Phone:</strong> 1-800-SCRATCH (1-800-727-2824)</p>
            <p><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
          </div>
        </div>

        {/* Support Contact */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
            </svg>
            Customer Support
          </h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> support@{content.domain.toLowerCase()}</p>
            <p><strong>Phone:</strong> 1-800-HELP-NOW (1-800-435-7669)</p>
            <p><strong>Hours:</strong> 24/7 Support Available</p>
          </div>
        </div>
      </div>

      {/* Business Address */}
      <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Business Address
        </h3>
        <div className="text-gray-700">
          <p className="font-semibold">{content.domain}</p>
          <p>{content.address}</p>
          <p className="mt-2 text-sm text-gray-600">Company Number: {content.company}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Send us a Message
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all"
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all"
                placeholder="Your last name"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all" required>
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="loan">Loan Application Help</option>
              <option value="technical">Technical Issue</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all resize-vertical"
              placeholder="Please describe your inquiry or message..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-custom-blue to-custom-blue-light hover:from-custom-blue-dark hover:to-custom-blue text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Quick Links */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">
          Need Quick Answers?
        </h3>
        <p className="text-gray-700 mb-4">
          Check out our FAQ section for immediate answers to common questions about loans, applications, and our services.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
            Loan Requirements
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
            Application Process
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
            Approval Times
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
            Interest Rates
          </span>
        </div>
      </section>
    </div>
  );

  const PrivacyPolicyContent = () => (
    <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
      <p className="text-gray-600 text-center mb-8">
        <strong>Effective Date:</strong> January 1, 2024<br />
        <strong>Last Updated:</strong> January 1, 2024
      </p>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h3>
        <p className="text-gray-600 mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Lenders in our network who may be able to provide you with loan products</li>
          <li>Service providers who assist us in operating our business</li>
          <li>Credit reporting agencies and verification services</li>
          <li>Law enforcement or regulatory agencies when required by law</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h3>
        <p className="text-gray-600">
          We implement appropriate technical and organizational measures to protect your personal information 
          against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
          over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Us</h3>
        <p className="text-gray-600">
          If you have questions about this Privacy Policy, please contact us at:
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
  );

  const TermsOfServiceContent = () => (
    <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
      <p className="text-gray-600 text-center mb-8">
        <strong>Effective Date:</strong> January 1, 2024<br />
        <strong>Last Updated:</strong> January 1, 2024
      </p>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h3>
        <p className="text-gray-600">
          By accessing and using {content.domain}, you accept and agree to be bound by the terms and provision 
          of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Service Description</h3>
        <p className="text-gray-600 mb-4">
          {content.domain} is a loan matching service that connects potential borrowers with lenders in our network. 
          We are not a lender and do not make credit decisions. Key points about our service:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>We do not guarantee loan approval or specific terms</li>
          <li>Loan terms are determined by individual lenders</li>
          <li>Not all applicants will qualify for a loan</li>
          <li>We may receive compensation from lenders for successful referrals</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Eligibility Requirements</h3>
        <p className="text-gray-600 mb-4">To use our service, you must:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Be at least 18 years old</li>
          <li>Be a U.S. citizen or permanent resident</li>
          <li>Have a valid Social Security Number</li>
          <li>Have a regular source of income</li>
          <li>Have an active checking account</li>
          <li>Provide accurate and complete information</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Contact Information</h3>
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
    </div>
  );

  const ResponsibleLendingContent = () => (
    <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
      <p className="text-gray-600 text-center mb-8">
        At {content.domain}, we are committed to promoting responsible lending practices 
        and helping consumers make informed financial decisions.
      </p>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment</h3>
        <p className="text-gray-600 mb-4">
          We work only with lenders who adhere to responsible lending standards and comply with 
          applicable federal and state regulations. Our network lenders are committed to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Transparent disclosure of all loan terms and conditions</li>
          <li>Fair and non-discriminatory lending practices</li>
          <li>Reasonable assessment of borrower's ability to repay</li>
          <li>Compliance with applicable interest rate and fee regulations</li>
          <li>Clear communication throughout the loan process</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Before You Borrow</h3>
        <p className="text-gray-600 mb-4">Before applying for any loan, please consider the following:</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Only borrow what you need and can afford to repay</li>
          <li>Understand all terms, including interest rates, fees, and repayment schedule</li>
          <li>Consider alternatives such as borrowing from family, friends, or your employer</li>
          <li>Explore assistance programs that may be available in your community</li>
          <li>Budget for loan payments to ensure you can meet your obligations</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding Loan Terms</h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-yellow-800 mb-3">Important Loan Information</h4>
          <ul className="text-yellow-700 space-y-2 text-sm">
            <li><strong>APR Range:</strong> 5.99% to 35.99% for qualified consumers</li>
            <li><strong>Loan Amounts:</strong> Typically $200 to $5,000</li>
            <li><strong>Repayment Terms:</strong> 61 days to 3 years</li>
            <li><strong>Fees:</strong> May include origination fees, late fees, and other charges</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
        <p className="text-gray-600">
          If you have questions about responsible lending, please contact us:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <p className="text-gray-700">
            <strong>{content.domain}</strong><br />
            Address: {content.address}<br />
            Email: support@{content.domain.toLowerCase()}
          </p>
        </div>
      </section>
    </div>
  );

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="my-container">
          <div className="py-12 sm:py-16">
            <Column className="items-center text-center space-y-6 sm:space-y-8 px-4 sm:px-0">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">{content.domain}</h3>
                <p className="text-gray-300 max-w-md text-sm sm:text-base">
                  Your trusted partner for fast, secure, and reliable loan services.
                </p>
              </div>
              
              <div className="w-full max-w-sm">
                <ButtonGetStart />
              </div>
            </Column>
          </div>
          
          <div className="border-t border-gray-700 py-6 sm:py-8">
            <Column className="items-center text-center space-y-4 text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
                <button 
                  onClick={() => openModal('contact')}
                  className="hover:text-white transition-colors underline cursor-pointer bg-transparent border-none text-xs sm:text-sm"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => openModal('privacy')}
                  className="hover:text-white transition-colors underline cursor-pointer bg-transparent border-none text-xs sm:text-sm"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openModal('terms')}
                  className="hover:text-white transition-colors underline cursor-pointer bg-transparent border-none text-xs sm:text-sm"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => openModal('lending')}
                  className="hover:text-white transition-colors underline cursor-pointer bg-transparent border-none text-xs sm:text-sm"
                >
                  Responsible Lending
                </button>
              </div>
              
              <p>
                © 2024 {content.domain}, United States of America – All Rights Reserved
              </p>
              <p className="leading-relaxed">
                {content.domain}, company number {content.company}. Address: {content.address}
              </p>
              
              {/* Disclaimer */}
              <div className="max-w-4xl text-center text-xs leading-relaxed mt-6 pt-4 border-t border-gray-700">
                <p className="mb-2">
                  <strong>Important Disclosure:</strong> {content.domain} is not a lender and does not make credit decisions. 
                  We connect borrowers with participating lenders who may be able to provide loan products. 
                  Not all applicants will be approved and individual loan terms may vary.
                </p>
                <p>
                  Loan approval and actual loan terms depend on your ability to meet our credit and other underwriting criteria. 
                  Satisfactory credit history may be required. All loans are subject to credit approval.
                </p>
              </div>
            </Column>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        title="Contact Us"
      >
        <ContactContent />
      </Modal>

      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </Modal>

      <Modal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Terms of Service"
      >
        <TermsOfServiceContent />
      </Modal>

      <Modal
        isOpen={activeModal === 'lending'}
        onClose={closeModal}
        title="Responsible Lending"
      >
        <ResponsibleLendingContent />
      </Modal>
    </>
  );
};

export default Footer;