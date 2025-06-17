"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  onScriptLoad?: () => void;
};

const ButtonGetStart = ({ onScriptLoad }: Props) => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = async () => {
    if (isLoading) return; // Prevent double clicks
    
    setIsLoading(true);
    
    try {
      // Google Ads Conversion Tracking
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          'event': 'loan_application_start',
          'event_category': 'engagement',
          'event_label': 'get_started_button',
          'value': 1
        });
      }

      // Set the form configuration only - let the form page handle script loading
      if (typeof window !== 'undefined') {
        (window as any)._lg_form_init_ = {
          aid: "14881",
          template: "fresh"
        };

        // Call the callback if provided
        if (onScriptLoad) {
          onScriptLoad();
        }

        // Navigate to form page
        push("/form-loan");
      }
    } catch (error) {
      console.error('Error navigating to loan form:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <button
      className={`w-full bg-gradient-to-r from-custom-blue to-custom-blue-light hover:from-custom-blue-dark hover:to-custom-blue active:from-custom-blue-dark active:to-custom-blue-dark text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase tracking-wide text-sm sm:text-base min-h-[48px] touch-manipulation ${
        isLoading ? 'opacity-75 cursor-not-allowed' : ''
      }`}
      onClick={handleClick}
      disabled={isLoading}
      aria-label="Start loan application process"
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        'Get Started'
      )}
    </button>
  );
};

export default ButtonGetStart;