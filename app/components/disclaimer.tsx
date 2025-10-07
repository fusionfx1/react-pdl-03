import React from "react";
import Column from "./column";

type Props = {};

const Disclaimer = (props: Props) => {
  return (
    <section className="py-8 bg-gray-100 border-t">
      <div className="my-container">
        <Column className="text-center space-y-4">
          <div className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-3">
              <strong>Important Disclosures:</strong>
            </p>
            <p className="mb-3">
              This website is a loan marketplace that connects borrowers with potential lenders. We are not a lender and do not make loans or credit decisions. 
              We do not guarantee loan approval or specific loan terms. Loan approval and terms are determined by individual lenders based on their own criteria.
            </p>
            <p className="mb-3">
              <strong>Not all applicants will qualify for a loan.</strong> Loan approval depends on various factors including credit history, income, and other lender-specific requirements. 
              Some lenders may perform credit checks which may affect your credit score.
            </p>
            <p className="mb-3">
              <strong>Loan terms and conditions vary by lender.</strong> Interest rates, fees, and repayment terms are set by individual lenders and may vary significantly. 
              Please carefully review all loan terms before accepting any offer.
            </p>
            <p className="mb-3">
              <strong>Funding times may vary.</strong> While some lenders may offer same-day or next-day funding, actual funding times depend on the lender's processes, 
              your bank's policies, and other factors beyond our control.
            </p>
            <p>
              By submitting your information through this website, you agree to be contacted by lenders and third-party partners. 
              You may opt out of communications at any time. Please review our Privacy Policy and Terms of Service for more information.
            </p>
          </div>
          
          <div className="text-xs text-gray-500 mt-6 pt-4 border-t border-gray-300">
            <p>
              © 2024 {process.env.NEXT_PUBLIC_SITE_NAME || "ScratchPayCredits.com"}. All rights reserved. 
              This website is operated by a loan marketplace service provider.
            </p>
          </div>
        </Column>
      </div>
    </section>
  );
};

export default Disclaimer;
