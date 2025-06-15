import React from "react";
import Column from "./column";
import ButtonGetStart from "./button-get-start";
import { content } from "../content/text";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="my-container">
        <div className="py-12 sm:py-16">
          <Column className="items-center text-center space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">{content.domain}</h3>
              <p className="text-gray-300 max-w-md text-sm sm:text-base">
                Your trusted partner for fast, secure, and reliable loan services.
              </p>
            </div>
            
            <div className="w-full max-w-sm">
              <ButtonGetStart />
            </div>
          </Column>
        </div>
        
        <div className="border-t border-gray-700 py-6 sm:py-8">
          <Column className="items-center text-center space-y-4 text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
              <Link 
                href="/privacy-policy" 
                className="hover:text-white transition-colors underline"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="hover:text-white transition-colors underline"
              >
                Terms of Service
              </Link>
              <Link 
                href="/responsible-lending" 
                className="hover:text-white transition-colors underline"
              >
                Responsible Lending
              </Link>
            </div>
            
            <p>
              © 2024 {content.domain}, United States of America – All Rights Reserved
            </p>
            <p className="leading-relaxed">
              {content.domain}, company number {content.company}. Address: {content.address}
            </p>
            
            {/* Disclaimer */}
            <div className="max-w-4xl text-center text-xs leading-relaxed mt-6 pt-4 border-t border-gray-700">
              <p className="mb-2">
                <strong>Important Disclosure:</strong> {content.domain} is not a lender and does not make credit decisions. 
                We connect borrowers with participating lenders who may be able to provide loan products. 
                Not all applicants will be approved and individual loan terms may vary.
              </p>
              <p>
                Loan approval and actual loan terms depend on your ability to meet our credit and other underwriting criteria. 
                Satisfactory credit history may be required. All loans are subject to credit approval.
              </p>
            </div>
          </Column>
        </div>
      </div>
    </footer>
  );
};

export default Footer;