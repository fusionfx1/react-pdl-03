"use client";

import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

type Props = {};

const ScrollToTop = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
          bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
          text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl 
          transition-all duration-300 transform hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-blue-300
          touch-manipulation min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px]
          flex items-center justify-center
        `}
        aria-label="Scroll to top"
      >
        <BiArrowToTop size={24} className="sm:w-7 sm:h-7" />
      </button>
    </div>
  );
};

export default ScrollToTop;