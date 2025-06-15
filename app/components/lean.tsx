import React from "react";
import Column from "./column";
import TableLean from "./table-lean";
import { content } from "../content/text";
type Props = {};

const Lean = (props: Props) => {
  return (
    <Column className="p-3 gap-6">
      <div className="text-4xl font-medium text-center">Loan Information</div>

      <Column className="gap-3">
        <div className="text-4xl font-medium">APR Disclosure and Range</div>
        <p>
          {`${content.domain} is not a lender – as such, we do not have control over the APR you will be offered. We display a Representative APR only as it is based on data offered from multiple lenders. Qualified consumers can get a loan with APR Rates ranging from as low as 5.99% and loans repayment period of 61 to 90 days. Your loan amount, APR and repayment term will vary based on your credit worthiness, state and lender or lending partner. Although some providers offer rates from 5.99% APR rates that low are only available to certain customers. Important Information: Some lenders and services may not be accessible to residents of all States based on lender’s preferences and legislation particular to that State.`}
        </p>
        <p>
          {`The following table represents sample rates, is for informational purposes only, and may not reflect the actual APRs offered by your lender and/or lending partner. The repayment terms are for close end loan products, and is not reflective of all loan products offered in our network. However, The minimum repayment period for any loan will be 90 days from the date the loan is issued. The maximum repayment period is 3 years`}
        </p>
      </Column>

      <Column gap={3}>
        <div className="text-4xl font-medium">Examples of Costs & APR</div>
        <p>Rates Table</p>
        <div>
          <TableLean />
        </div>
      </Column>

      <Column gap={3}>
        <div className="text-4xl font-medium">
          {`Representative Example (Qualified Customers) (2)
`}
        </div>
        <p>
          {`If you borrowed $5,000 over a 48 month period and the loan had a 8% arrangement fee ($400), your monthly repayments would be $131.67, with a total pay back amount of $6320.12 which including the 8% fee paid from the loan amount, would have a total cost of $1720.12. Representative 18.23% APR.

`}
        </p>
      </Column>
    </Column>
  );
};

export default Lean;
