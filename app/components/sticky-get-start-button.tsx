"use client";

import React, { useState, useEffect } from "react";
import ButtonGetStart from "./button-get-start";
import { BiMoney, BiTime } from "react-icons/bi";
import { AiOutlineThunderbolt, AiOutlineClose } from "react-icons/ai";

type Props = {};

const StickyGetStartButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClose = () => {
    setIsClosed(true);
  };

  // Don't render if closed
  if (isClosed) return null;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <div
        className={`
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}
          transition-all duration-500 transform
          w-64 sm:w-72
        `}
      >
        <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-2xl p-4 sm:p-5 border border-red-100 backdrop-blur-sm relative">
          {/* Close Button - Made smaller */}
          <button
            onClick={handleClose}
            className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
            aria-label="Close"
          >
            <AiOutlineClose className="text-white w-2 h-2" />
          </button>

          {/* Header with icon */}
          <div className="flex items-center justify-center mb-3">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-2 mr-2">
              <AiOutlineThunderbolt className="text-white w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-gray-800">
              Quick Loan Application
            </h3>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs sm:text-sm text-gray-700">
              <BiTime className="text-green-600 w-4 h-4 mr-2 flex-shrink-0" />
              <span>Decision in minutes</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-700">
              <BiMoney className="text-green-600 w-4 h-4 mr-2 flex-shrink-0" />
              <span>Up to $5,000 available</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-2">
            <ButtonGetStart />
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