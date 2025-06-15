import React from "react";

type Props = {};

const TableLean = (props: Props) => {
  const tableData = [
    {
      amount: "$500",
      rate: "28.00%",
      term: "6 months",
      fee: "2.00%",
      feeCost: "$10.00",
      repayment: "$95.33",
      apr: "32.45%",
      totalRepayments: "$571.98",
      totalCosts: "$81.98"
    },
    {
      amount: "$1,000",
      rate: "24.00%",
      term: "12 months",
      fee: "3.00%",
      feeCost: "$30.00",
      repayment: "$94.56",
      apr: "29.82%",
      totalRepayments: "$1,134.72",
      totalCosts: "$164.72"
    },
    {
      amount: "$1,500",
      rate: "21.00%",
      term: "18 months",
      fee: "4.00%",
      feeCost: "$60.00",
      repayment: "$96.78",
      apr: "26.15%",
      totalRepayments: "$1,742.04",
      totalCosts: "$302.04"
    },
    {
      amount: "$2,500",
      rate: "19.00%",
      term: "24 months",
      fee: "5.00%",
      feeCost: "$125.00",
      repayment: "$126.03",
      apr: "24.12%",
      totalRepayments: "$3,024.72",
      totalCosts: "$649.72"
    },
    {
      amount: "$5,000",
      rate: "13.00%",
      term: "48 months",
      fee: "8.00%",
      feeCost: "$400.00",
      repayment: "$131.67",
      apr: "18.23%",
      totalRepayments: "$6,320.12",
      totalCosts: "$1,720.12"
    }
  ];

  const headers = [
    "Loan Amount",
    "Interest Rate",
    "Loan Term",
    "Fee",
    "Fee Cost",
    "Repayment",
    "APR",
    "Total Repayments",
    "Total Costs"
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            {headers.map((header, index) => (
              <th key={index} className="px-2 sm:px-4 py-3 sm:py-4 text-left font-semibold text-xs sm:text-sm whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr 
              key={index} 
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-red-50 transition-colors`}
            >
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-red-600 text-xs sm:text-sm">{row.amount}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.rate}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.term}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.fee}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.feeCost}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.repayment}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-orange-600 text-xs sm:text-sm">{row.apr}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.totalRepayments}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-red-600 text-xs sm:text-sm">{row.totalCosts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLean;