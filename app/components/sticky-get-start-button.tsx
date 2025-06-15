"use client";

import React, { useState, useEffect } from "react";
import ButtonGetStart from "./button-get-start";

type Props = {};

const StickyGetStartButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div
        className={`
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
          transition-all duration-300 transform
          w-48 sm:w-56
        `}
      >
        <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-4 border border-gray-200">
          <div className="space-y-2">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-semibold text-gray-800">
                Ready to get started?
              </p>
              <p className="text-xs text-gray-600">
                Quick approval in minutes
              </p>
            </div>
            <ButtonGetStart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyGetStartButton;