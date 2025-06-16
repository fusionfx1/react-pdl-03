import React from "react";

type Props = {};

const TableLean = (props: Props) => {
  const tableData = [
    {
      amount: "$1,000",
      rate: "24.00%",
      term: "12 months",
      fee: "3.00%",
      repayment: "$94.56",
      apr: "29.82%",
      totalPayments: "$1,134.72",
      totalCosts: "$164.72"
    },
    {
      amount: "$2,000",
      rate: "19.00%",
      term: "24 months",
      fee: "5.00%",
      repayment: "$100.82",
      apr: "24.12%",
      totalPayments: "$2,419.68",
      totalCosts: "$519.68"
    },
    {
      amount: "$2,500",
      rate: "16.00%",
      term: "36 months",
      fee: "10.00%",
      repayment: "$87.89",
      apr: "22.93%",
      totalPayments: "$3,164.13",
      totalCosts: "$914.13"
    },
    {
      amount: "$5,000",
      rate: "13.00%",
      term: "48 months",
      fee: "12.00%",
      repayment: "$131.67",
      apr: "18.23%",
      totalPayments: "$6,320.12",
      totalCosts: "$1,920.12"
    }
  ];

  const headers = [
    "Loan Amount",
    "Interest Rate",
    "Loan Term",
    "Fee",
    "Monthly Payment",
    "APR",
    "Total Payments",
    "Total Cost"
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="bg-gradient-to-r from-custom-blue to-custom-blue-light text-white">
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
              } hover:bg-blue-50 transition-colors`}
            >
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-custom-blue text-xs sm:text-sm">{row.amount}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-custom-blue text-xs sm:text-sm">{row.rate}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-custom-blue text-xs sm:text-sm">{row.term}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-custom-blue text-xs sm:text-sm">{row.fee}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-custom-blue text-xs sm:text-sm">{row.repayment}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-orange-600 text-xs sm:text-sm">{row.apr}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-custom-blue text-xs sm:text-sm">{row.totalPayments}</td>
              <td className="px-2 sm:px-4 py-3 sm:py-4 font-bold text-red-600 text-xs sm:text-sm">{row.totalCosts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLean;