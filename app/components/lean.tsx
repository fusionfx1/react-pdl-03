import React from "react";
import Column from "./column";
import TableLean from "./table-lean";
import { content } from "../content/text";

type Props = {};

const Lean = (props: Props) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="loan-information">
      <div className="my-container">
        <header className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Loan Information & Rates
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent loan pricing and terms to help you make informed financial decisions
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-0">
          {/* APR Disclosure */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Annual Percentage Rate (APR) for Loans
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                At {content.domain} we connect you with lenders offering competitive APR rates ranging from <strong>4.95% minimum to 35.95% maximum</strong>. The APR you may be offered depends on different factors, including your personal financial situation and credit standing. By completing our online loan application form you shall receive details of the APR and full terms of any loan offered to you.
              </p>
              <p>
                The actual interest rate you may be offered depends on several factors: your credit score, financial history, income, employment status, and loan amount requested. Contact your matched lender for more information about the specific APR you may receive and the complete terms of your loan agreement.
              </p>
            </div>
          </article>

          {/* Loan Term Section */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Loan Repayment Terms (Repayment Period)
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full" role="table" aria-label="Loan repayment terms">
                <thead>
                  <tr className="bg-gradient-to-r from-custom-blue to-custom-blue-light text-white">
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base" scope="col">
                      Minimum Repayment Period
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base" scope="col">
                      Maximum Repayment Period
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">
                      65 days
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm sm:text-base">
                      84 months (7 years)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Examples Table */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Loan Examples - Costs & APR Calculator
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Representative loan examples showing different amounts, rates, and terms</p>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <TableLean />
            </div>
          </article>

          {/* Representative Example */}
          <article className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Representative Loan Example (Qualified Customers)
            </h3>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                <strong>Example:</strong> If you borrowed <strong>$5,000</strong> over a <strong>84 month period</strong> and the loan had an <strong>8% arrangement fee ($400)</strong>, your monthly repayments would be <strong>$131.67</strong>, with a total payback amount of <strong>$6,320.12</strong> which including the 8% fee paid from the loan amount, would have a total cost of <strong>$1,720.12</strong>. Representative <strong>35.95% APR</strong>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Lean;