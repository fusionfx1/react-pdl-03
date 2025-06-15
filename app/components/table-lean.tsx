import React from "react";

type Props = {};

const TableLean = (props: Props) => {
  return (
    <div className="border max-w-screen overflow-y-scroll w-full lg:overflow-hidden">
      <table className="w-full">
        <tbody>
          <tr className="background--primary color--white font-weight--400">
            <th className="font-medium p-3 border">Loan Amount</th>
            <th className="font-medium p-3 border">Interest Rate</th>
            <th className="font-medium p-3 border">Loan Term</th>
            <th className="font-medium p-3 border">Fee</th>
            <th className="font-medium p-3 border">Fee Cost</th>
            <th className="font-medium p-3 border">Repayment</th>
            <th className="font-medium p-3 border">APR</th>
            <th className="font-medium p-3 border">Total Repayments</th>
            <th className="font-medium p-3 border">Total Costs</th>
          </tr>
          <tr className="">
            <td className="p-3 border text-center">$1,000</td>
            <td className="p-3 border text-center">24.00%</td>
            <td className="p-3 border text-center">12 months</td>
            <td className="p-3 border text-center">3.00%</td>
            <td className="p-3 border text-center">$30.00</td>
            <td className="p-3 border text-center">$94.56</td>
            <td className="p-3 border text-center">29.82%</td>
            <td className="p-3 border text-center">$1,134.72</td>
            <td className="p-3 border text-center">$164.72</td>
          </tr>
          <tr className="background--white">
            <td className="p-3 border text-center">$2,000</td>
            <td className="p-3 border text-center">19.00%</td>
            <td className="p-3 border text-center">24 months</td>
            <td className="p-3 border text-center">5.00%</td>
            <td className="p-3 border text-center">$100.00</td>
            <td className="p-3 border text-center">$100.82</td>
            <td className="p-3 border text-center">24.12%</td>
            <td className="p-3 border text-center">$2,419.68</td>
            <td className="p-3 border text-center">$519.68</td>
          </tr>
          <tr className="background--white">
            <td className="p-3 border text-center">$5,000</td>
            <td className="p-3 border text-center">13.00%</td>
            <td className="p-3 border text-center">48 months</td>
            <td className="p-3 border text-center">8.00%</td>
            <td className="p-3 border text-center">$400.00</td>
            <td className="p-3 border text-center">$131.67</td>
            <td className="p-3 border text-center">18.23%</td>
            <td className="p-3 border text-center">$6,320.12</td>
            <td className="p-3 border text-center">$1,720.12</td>
          </tr>
          <tr className="background--white">
            <td className="p-3 border text-center">$10,000</td>
            <td className="p-3 border text-center">7.90%</td>
            <td className="p-3 border text-center">60 months</td>
            <td className="p-3 border text-center">10.00%</td>
            <td className="p-3 border text-center">$1000.00</td>
            <td className="p-3 border text-center">$202.28</td>
            <td className="p-3 border text-center">9.20%</td>
            <td className="p-3 border text-center">$12,136.80</td>
            <td className="p-3 border text-center">$3,136.80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableLean;
