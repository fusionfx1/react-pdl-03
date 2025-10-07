"use client";

import React from "react";
import Column from "./column";
import { TiInputChecked } from "react-icons/ti";
import Row from "./row";
import FormBanner from "./form-banner";
import { content } from "../content/text";
import { useSearchParams } from "next/navigation";

type Props = {};

const Banner = (props: Props) => {
  const searchParams = useSearchParams();
  
  // Get URL parameters
  const city = searchParams.get('city');
  const state = searchParams.get('state');
  const offer = searchParams.get('offer');
  
  // Create dynamic subtitle based on URL parameters
  const getSubtitle = () => {
    if (city && state) {
      return (
        <>
          Special Offer for{" "}
          <span className="text-yellow-300 font-bold text-shadow-lg drop-shadow-lg">
            {city}, {state}
          </span>{" "}
          Today.
        </>
      );
    } else if (city) {
      return (
        <>
          Special Offer for{" "}
          <span className="text-yellow-300 font-bold text-shadow-lg drop-shadow-lg">
            {city}
          </span>{" "}
          Today.
        </>
      );
    } else if (offer) {
      return `${offer} • Connect with Lenders • All Credit Types Welcome`;
    } else {
      return "Connect with Trusted Lenders.";
    }
  };

  return (
    <section className="min-h-24 bg-green-dark py-12 sm:py-8 md:py-12 lg:py-16" role="banner">
      <div className="my-container">
        <Column className="text-white text-center gap-6 sm:gap-8 lg:gap-10">
          <header>
            <Column className="gap-3 sm:gap-4 lg:gap-6">
              <div className="font-bold text-lg sm:text-xl">{content.keyword}</div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium px-4 sm:px-0">
                {content.title1}
              </h1>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-normal px-4 sm:px-0">
                {getSubtitle()}
              </h2>
            </Column>
          </header>
          
          <div className="w-full flex justify-center" role="application" aria-label="Loan amount calculator">
            <FormBanner />
          </div>

          <div className="mx-auto space-y-2 sm:space-y-3" role="list" aria-label="Loan benefits">
            <Row gap={3} className="justify-center">
              <TiInputChecked size={20} className="sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              <div className="text-xs sm:text-base"> All credit types welcome</div>
            </Row>
            <Row gap={3} className="justify-center">
              <TiInputChecked size={20} className="sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              <div className="text-xs sm:text-base"> Connect with trusted lenders</div>
            </Row>
            <Row gap={3} className="justify-center">
              <TiInputChecked size={20} className="sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
              <div className="text-xs sm:text-base"> Safe, secure and reliable</div>
            </Row>
          </div>
        </Column>
      </div>
    </section>
  );
};

export default Banner;