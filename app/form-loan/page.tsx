import React from "react";
import FormBanner from "../components/form-banner";

type Props = {};

const FormLoadPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="my-container">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Complete Your Loan Application
          </h1>
          <p className="text-xl text-gray-600">
            Get your loan decision in minutes
          </p>
        </div>
        <FormBanner />
      </div>
    </div>
  );
};

export default FormLoadPage;