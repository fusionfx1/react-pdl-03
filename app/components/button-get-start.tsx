"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  onScriptLoad?: () => void;
};

const ButtonGetStart = ({ onScriptLoad }: Props) => {
  const { push } = useRouter();
  
  const handleClick = () => {
    // Google Ads Conversion Tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'loan_application_start',
        'event_category': 'engagement',
        'event_label': 'get_started_button',
        'value': 1
      });
    }

    // Load the external script
    if (typeof window !== 'undefined') {
      // Set the form configuration
      (window as any)._lg_form_init_ = {
        aid: "14881",
        template: "fresh"
      };

      // Create script element
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://apikeep.com/form/applicationInit.js';
      
      // Add script to head
      document.head.appendChild(script);
      
      // Create the form container if it doesn't exist
      let formContainer = document.getElementById('_lg_form_');
      if (!formContainer) {
        formContainer = document.createElement('div');
        formContainer.id = '_lg_form_';
        document.body.appendChild(formContainer);
      }

      // Call the callback if provided
      if (onScriptLoad) {
        onScriptLoad();
      }

      // Navigate to form page
      push("/form-loan");
    }
  };
  
  return (
    <button
      className="w-full bg-gradient-to-r from-custom-blue to-custom-blue-light hover:from-custom-blue-dark hover:to-custom-blue active:from-custom-blue-dark active:to-custom-blue-dark text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase tracking-wide text-sm sm:text-base min-h-[48px] touch-manipulation"
      onClick={handleClick}
    >
      Get Started
    </button>
  );
};

export default ButtonGetStart;