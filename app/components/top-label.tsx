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
        <div className="bg-[#F3F3FB] border p-3 text-center text-sm w-full">
          Consumer Advisory: APR Rates Range From 5.99% to 35.99% Maximum APR for qualified consumers.
        </div>
        <div
          className={` ${isScrolled ? "opacity-100" : "opacity-0"
            } border bg-white text-center p-3 font-medium transition-all z-[9999]`}
        >
          {`${content.domain}`}
        </div>
      </div>
    </div>
  );
};

export default TopLabel;
