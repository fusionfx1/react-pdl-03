"use client";

import React, { useState, useEffect } from "react";
import { IoArrowForward, IoClose } from "react-icons/io5";

type Props = {};

const StickyCTA = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleApplyNow = () => {
    // Scroll to form or redirect to application
    const formElement = document.getElementById('_lg_form_');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg sm:hidden">
      <div className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-800">
              Get Your Loan Today!
            </div>
            <div className="text-xs text-gray-600">
              Apply in 2 minutes • All credit types welcome
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleApplyNow}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-1 transition-colors"
            >
              Apply Now
              <IoArrowForward size={16} />
            </button>
            
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
