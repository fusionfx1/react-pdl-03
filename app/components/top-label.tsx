"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";
import { content } from "../content/text";
type Props = {};

const TopLabel = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative" style={{ zIndex: 10 }}>
      <div className="fixed w-full">
        <div className="bg-[#F3F3FB] border p-2 sm:p-3 text-center text-xs sm:text-sm w-full">
          APR Ranges From 5.99% up to 35.99% For Qualified Customers.
        </div>
        <div
          className={` ${isScrolled ? "opacity-100" : "opacity-0"
            } border bg-white text-center p-2 sm:p-3 font-medium transition-all z-[9999] text-sm sm:text-base`}
        >
          {`${content.domain}`}
        </div>
      </div>
    </div>
  );
};

export default TopLabel;