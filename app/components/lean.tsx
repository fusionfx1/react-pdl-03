import React from "react";
import Column from "./column";
import TableLean from "./table-lean";
import { content } from "../content/text";

type Props = {};

const Lean = (props: Props) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="my-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Loan Information
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing and terms for informed decisions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* APR Disclosure */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              APR Disclosure and Range
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {`${content.domain} is not a lender – as such, we do not have control over the APR you will be offered. We display a Representative APR only as it is based on data offered from multiple lenders. Qualified consumers can get a loan with APR Rates ranging from as low as 5.99% and loans repayment period of 61 to 90 days. Your loan amount, APR and repayment term will vary based on your credit worthiness, state and lender or lending partner. Although some providers offer rates from 5.99% APR rates that low are only available to certain customers. Important Information: Some lenders and services may not be accessible to residents of all States based on lender's preferences and legislation particular to that State.`}
              </p>
              <p>
                {`The following table represents sample rates, is for informational purposes only, and may not reflect the actual APRs offered by your lender and/or lending partner. The repayment terms are for close end loan products, and is not reflective of all loan products offered in our network. However, The minimum repayment period for any loan will be 90 days from the date the loan is issued. The maximum repayment period is 3 years`}
              </p>
            </div>
          </div>

          {/* Examples Table */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Examples of Costs & APR
            </h3>
            <p className="text-gray-600 mb-6">Sample rates for reference</p>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <TableLean />
            </div>
          </div>

          {/* Representative Example */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-10 border border-blue-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Representative Example (Qualified Customers)
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                If you borrowed $5,000 over a 48 month period and the loan had a 8% arrangement fee ($400), your monthly repayments would be $131.67, with a total pay back amount of $6320.12 which including the 8% fee paid from the loan amount, would have a total cost of $1720.12. Representative 18.23% APR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lean;