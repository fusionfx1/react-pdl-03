"use client";

import React, { useState, useEffect } from "react";
import ButtonGetStart from "./button-get-start";
import { BiMoney, BiTime } from "react-icons/bi";
import { AiOutlineThunderbolt, AiOutlineClose } from "react-icons/ai";

type Props = {};

const StickyGetStartButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Defer loading to improve initial page performance
    const timer = setTimeout(() => {
      setIsLoaded(true);
      window.addEventListener("scroll", toggleVisibility, { passive: true });
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  // Don't render if closed or not loaded
  if (isClosed || !isLoaded) return null;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <div
        className={`
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}
          transition-all duration-500 transform
          w-60 sm:w-72
        `}
      >
        <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-2xl p-3 sm:p-5 border border-red-100 backdrop-blur-sm relative">
          {/* Modern Close Button */}
          <button
            onClick={handleClose}
            className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-100 hover:to-red-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation shadow-lg border border-white/50 backdrop-blur-sm group"
            aria-label="Close sticky loan application button"
          >
            <AiOutlineClose className="text-gray-600 group-hover:text-red-600 w-4 h-4 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Header with icon */}
          <div className="flex items-center justify-center mb-2 sm:mb-3">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-1.5 sm:p-2 mr-2">
              <AiOutlineThunderbolt className="text-white w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-gray-800">
              Quick Loan Application
            </h3>
          </div>

          {/* Features */}
          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
            <div className="flex items-center text-xs sm:text-sm text-gray-700">
              <BiTime className="text-green-600 w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              <span>Decision in minutes</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-700">
              <BiMoney className="text-green-600 w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              <span>Up to $5,000 available</span>
            </div>
          </div>

          {/* CTA Button - Made smaller */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="transform scale-90 sm:scale-100">
              <ButtonGetStart />
            </div>
            <p className="text-center text-xs text-gray-500">
              Safe & Secure Application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyGetStartButton;