import React from "react";
import Column from "./column";
import TableLean from "./table-lean";
import { content } from "../content/text";

type Props = {};

const Lean = (props: Props) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="my-container">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Loan Information
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing and terms for informed decisions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-0">
          {/* APR Disclosure */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Annual Percentage Rate (APR)
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Here at {content.domain} we offer APR rates ranging from 4.95% minimum to 35.95% maximum. The APR you may be offered depends on different factors, including your personal situation and financial standing. By completing our loan offer form you shall receive details of the APR and full terms of any loan offered to you.
              </p>
              <p>
                The actual interest rate you may be offered depends on several factors: your credit score, financial history, income, etc. Contact your lender for more information about the APR you may receive and the terms of your loan agreement.
              </p>
            </div>
          </div>

          {/* Loan Term Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Loan Term (Repayment Period)
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-custom-blue to-custom-blue-light text-white">
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                      Minimum
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                      Maximum
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">
                      65 days
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">
                      84 months
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Examples Table */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Examples of Costs & APR
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Sample rates for reference</p>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <TableLean />
            </div>
          </div>

          {/* Representative Example */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Representative Example (Qualified Customers)
            </h3>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                If you borrowed $5,000 over a 84 month period and the loan had a 8% arrangement fee ($400), your monthly repayments would be $131.67, with a total pay back amount of $6320.12 which including the 8% fee paid from the loan amount, would have a total cost of $1720.12. Representative 35.95% APR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lean;