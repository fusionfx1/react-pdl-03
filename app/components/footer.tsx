import React from "react";
import Column from "./column";
import ButtonGetStart from "./button-get-start";
import { content } from "../content/text";

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
            <p>
              © 2024 {content.domain}, United States of America – All Rights Reserved
            </p>
            <p className="leading-relaxed">
              {content.domain}, company number {content.company}. Address: {content.address}
            </p>
          </Column>
        </div>
      </div>
    </footer>
  );
};

export default Footer;