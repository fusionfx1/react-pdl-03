import React from "react";
import FormBanner from "../components/form-banner";

type Props = {};

const FormLoadPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="my-container">
        <div className="text-center mb-8 sm:mb-10 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Complete Your Loan Application
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Get your loan decision in minutes
          </p>
        </div>
        <div className="flex justify-center">
          <FormBanner />
        </div>
      </div>
    </div>
  );
};

export default FormLoadPage;