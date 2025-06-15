import React from "react";
import Column from "./column";
import { TiInputChecked } from "react-icons/ti";
import Row from "./row";
import FormBanner from "./form-banner";
import { content } from "../content/text";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="min-h-24 bg-green-dark py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="my-container">
        <Column className="text-white text-center gap-6 sm:gap-8 lg:gap-10">
          <Column className="gap-3 sm:gap-4 lg:gap-6">
            <div className="font-bold text-lg sm:text-xl">{content.domain}</div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-medium px-4 sm:px-0">{content.title1}</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-normal px-4 sm:px-0">{content.title2}</div>
          </Column>
          <div className="w-full flex justify-center">
            <FormBanner />
          </div>

          <Column className="mx-auto space-y-2 sm:space-y-3">
            <Row gap={3}>
              <TiInputChecked size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
              <div className="text-sm sm:text-base">Available for all credit types</div>
            </Row>
            <Row gap={3}>
              <TiInputChecked size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
              <div className="text-sm sm:text-base">Money straight to your bank</div>
            </Row>
            <Row gap={3}>
              <TiInputChecked size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
              <div className="text-sm sm:text-base">Safe, secure and reliable</div>
            </Row>
          </Column>
        </Column>
      </div>
    </div>
  );
};

export default Banner;