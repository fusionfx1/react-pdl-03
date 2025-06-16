import React from "react";

type Props = {};

const TableLean = (props: Props) => {
  const tableData = [
    {
      amount: "$1,000",
      rate: "24%",
      term: "12 months",
      fees: "5% ($50)",
      repayment: "$99.29",
      totalPayments: "$1,191.48",
      totalCosts: "$191.48"
    },
    {
      amount: "$2,000",
      rate: "19%",
      term: "24 months",
      fees: "5% ($100)",
      repayment: "$105.86",
      totalPayments: "$2,540.64",
      totalCosts: "$540.64"
    },
    {
      amount: "$5,000",
      rate: "13%",
      term: "48 months",
      fees: "5% ($250)",
      repayment: "$140.84",
      totalPayments: "$6,760.32",
      totalCosts: "$1,760.32"
    },
    {
      amount: "$10,000",
      rate: "8%",
      term: "60 months",
      fees: "5% ($500)",
      repayment: "$212.90",
      totalPayments: "$12,774.00",
      totalCosts: "$2,774.00"
    }
  ];

  const headers = [
    "Loan Amount",
    "Interest Rate (APR)",
    "Loan Term",
    "Other Fees/Costs",
    "Monthly Payment",
    "Total Payments",
    "Total Costs"
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
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
              } hover:bg-orange-50 transition-colors`}
            >
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-orange-600 text-xs sm:text-sm">{row.amount}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-orange-700 text-xs sm:text-sm">{row.rate}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.term}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.fees}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-green-600 text-xs sm:text-sm">{row.repayment}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 text-gray-700 text-xs sm:text-sm">{row.totalPayments}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-semibold text-red-600 text-xs sm:text-sm">{row.totalCosts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLean;