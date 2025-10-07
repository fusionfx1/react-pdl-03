"use client";

import React, { useState, useMemo } from "react";
import Column from "./column";
import Row from "./row";

type Props = {};

const LoanCalculator = (props: Props) => {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(15.99);

  // Calculate monthly payment (simple calculation for demonstration)
  const monthlyPayment = useMemo(() => {
    if (loanAmount <= 0 || loanTerm <= 0 || interestRate <= 0) return 0;
    
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm;
    
    if (monthlyRate === 0) {
      return loanAmount / numPayments;
    }
    
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return Math.round(payment * 100) / 100;
  }, [loanAmount, loanTerm, interestRate]);

  const totalAmount = useMemo(() => {
    return Math.round(monthlyPayment * loanTerm * 100) / 100;
  }, [monthlyPayment, loanTerm]);

  const totalInterest = useMemo(() => {
    return Math.round((totalAmount - loanAmount) * 100) / 100;
  }, [totalAmount, loanAmount]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="loan-calculator">
      <div className="my-container">
        <header className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Loan Payment Calculator
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate your potential monthly payment. Actual terms may vary by lender.
          </p>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Column className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="100"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$200</span>
                      <span className="font-medium text-gray-700">${loanAmount.toLocaleString()}</span>
                      <span>$5,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (Months)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="6"
                      max="60"
                      step="6"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>6 months</span>
                      <span className="font-medium text-gray-700">{loanTerm} months</span>
                      <span>60 months</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Interest Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="5.99"
                      max="35.99"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5.99%</span>
                      <span className="font-medium text-gray-700">{interestRate}%</span>
                      <span>35.99%</span>
                    </div>
                  </div>
                </div>
              </Column>

              {/* Results Section */}
              <Column className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Estimated Payment</h3>
                  
                  <div className="space-y-4">
                    <Row className="justify-between items-center">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="text-2xl font-bold text-green-600">
                        ${monthlyPayment.toLocaleString()}
                      </span>
                    </Row>
                    
                    <div className="border-t pt-4 space-y-2">
                      <Row className="justify-between">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="font-medium">${totalAmount.toLocaleString()}</span>
                      </Row>
                      <Row className="justify-between">
                        <span className="text-gray-600">Total Interest:</span>
                        <span className="font-medium">${totalInterest.toLocaleString()}</span>
                      </Row>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-2">Important Note:</p>
                    <p>
                      This is an estimate only. Actual loan terms, including interest rates and monthly payments, 
                      will be determined by individual lenders based on your credit history, income, and other factors. 
                      Not all applicants will qualify for the rates shown.
                    </p>
                  </div>
                </div>
              </Column>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default LoanCalculator;
