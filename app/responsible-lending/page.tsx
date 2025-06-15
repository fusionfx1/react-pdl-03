/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { content } from "../content/text";

export default function ResponsibleLending() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="my-container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Responsible Lending Practices
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="text-gray-600 text-center mb-8">
              At {content.domain}, we are committed to promoting responsible lending practices 
              and helping consumers make informed financial decisions.
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-600 mb-4">
                We work only with lenders who adhere to responsible lending standards and comply with 
                applicable federal and state regulations. Our network lenders are committed to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Transparent disclosure of all loan terms and conditions</li>
                <li>Fair and non-discriminatory lending practices</li>
                <li>Reasonable assessment of borrower&apos;s ability to repay</li>
                <li>Compliance with applicable interest rate and fee regulations</li>
                <li>Clear communication throughout the loan process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Before You Borrow</h2>
              <p className="text-gray-600 mb-4">
                Before applying for any loan, please consider the following:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Only borrow what you need and can afford to repay</li>
                <li>Understand all terms, including interest rates, fees, and repayment schedule</li>
                <li>Consider alternatives such as borrowing from family, friends, or your employer</li>
                <li>Explore assistance programs that may be available in your community</li>
                <li>Budget for loan payments to ensure you can meet your obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Understanding Loan Terms</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Loan Information</h3>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li><strong>APR Range:</strong> 5.99% to 35.99% for qualified consumers</li>
                  <li><strong>Loan Amounts:</strong> Typically $200 to $5,000</li>
                  <li><strong>Repayment Terms:</strong> 61 days to 3 years</li>
                  <li><strong>Fees:</strong> May include origination fees, late fees, and other charges</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Actual loan terms will vary based on your creditworthiness, state regulations, 
                and lender policies. Always review and understand the specific terms offered to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Financial Education Resources</h2>
              <p className="text-gray-600 mb-4">
                We encourage all consumers to educate themselves about personal finance. 
                Here are some helpful resources:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><a href="https://www.consumerfinance.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau (CFPB)</a></li>
                <li><a href="https://www.ftc.gov/consumer-advice" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Federal Trade Commission Consumer Advice</a></li>
                <li><a href="https://www.annualcreditreport.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Annual Credit Report</a></li>
                <li><a href="https://www.nfcc.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">National Foundation for Credit Counseling</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">If You&apos;re Having Trouble</h2>
              <p className="text-gray-600 mb-4">
                If you&apos;re experiencing financial difficulties, consider these options:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Contact your lender immediately to discuss your situation</li>
                <li>Seek assistance from a nonprofit credit counseling agency</li>
                <li>Explore local community assistance programs</li>
                <li>Consider debt management or consolidation options</li>
                <li>Avoid taking additional loans to pay existing debts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about responsible lending or need assistance, please contact us:
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
        </div>
      </div>
    </div>
  );
}