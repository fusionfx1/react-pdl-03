import React from "react";
import Column from "./column";
import ButtonGetStart from "./button-get-start";
import { content } from "../content/text";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" my-container">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b-2 py-24">
        <div>
          <Column gap={10} className="">
            <div className="font-medium text-lg">{`${content.domain}`}</div>
            <div>
              <ButtonGetStart />
            </div>
          </Column>
        </div>
        <div>
          <Column className="gap-5">
            <div className="text-lg font-medium">Information</div>
            <div>APR Rates</div>
          </Column>
        </div>
        <div>
          <Column className="gap-5">
            <div className="text-lg font-medium">Support</div>
            <div>FAQs</div>
            <div>Contact</div>
          </Column>
        </div>
        <div>
          <Column className="gap-5">
            <div className="text-lg font-medium">Legal</div>
            <div>Terms & Conditions</div>
            <div>Website Policy</div>
            <div>Lending Policy</div>
            <div>Fraud</div>
            <div>CCPA Notice</div>
            <div>Do Not Sell</div>
            <div>Privacy Policy</div>
            <div>E-Consent</div>
          </Column>
        </div>
      </div> */}

      <div>
        <Column className="gap-10 text-center w-full text-sm py-24">
          <div>
            {` 2024 ${content.domain}, United States of America – All Rights
            Reserved`}
          </div>
          <div>{`${content.domain}, company number ${content.company}. Address: ${content.address}`}</div>
        </Column>
      </div>
    </div>
  );
};

export default Footer;
