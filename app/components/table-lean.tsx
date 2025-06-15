import React from "react";

type Props = {};

const TableLean = (props: Props) => {
  const tableData = [
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
      amount: "$2,000",
      rate: "19.00%",
      term: "24 months",
      fee: "5.00%",
      feeCost: "$100.00",
      repayment: "$100.82",
      apr: "24.12%",
      totalRepayments: "$2,419.68",
      totalCosts: "$519.68"
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
    },
    {
      amount: "$10,000",
      rate: "7.90%",
      term: "60 months",
      fee: "10.00%",
      feeCost: "$1000.00",
      repayment: "$202.28",
      apr: "9.20%",
      totalRepayments: "$12,136.80",
      totalCosts: "$3,136.80"
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
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-4 text-left font-semibold text-sm whitespace-nowrap">
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
              <td className="px-4 py-4 font-semibold text-blue-600">{row.amount}</td>
              <td className="px-4 py-4 text-gray-700">{row.rate}</td>
              <td className="px-4 py-4 text-gray-700">{row.term}</td>
              <td className="px-4 py-4 text-gray-700">{row.fee}</td>
              <td className="px-4 py-4 text-gray-700">{row.feeCost}</td>
              <td className="px-4 py-4 text-gray-700">{row.repayment}</td>
              <td className="px-4 py-4 font-semibold text-orange-600">{row.apr}</td>
              <td className="px-4 py-4 text-gray-700">{row.totalRepayments}</td>
              <td className="px-4 py-4 font-semibold text-red-600">{row.totalCosts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLean;