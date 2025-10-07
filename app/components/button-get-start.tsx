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

      // Load the external script
      if (typeof window !== 'undefined') {
        // Set the form configuration
        (window as any)._lg_form_init_ = {
          aid: "14881",
          template: "fresh"
        };

        // Check if script already exists
        const existingScript = document.querySelector('script[src="https://apikeep.com/form/applicationInit.js"]');
        
        if (!existingScript) {
          // Create script element
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://apikeep.com/form/applicationInit.js';
          
          // Add script to head
          document.head.appendChild(script);
        }
        
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
    } catch (error) {
      console.error('Error loading loan form:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <button
      className={`w-full bg-gradient-to-r from-custom-blue to-custom-blue-light hover:from-custom-blue-dark hover:to-custom-blue active:from-custom-blue-dark active:to-custom-blue-dark text-white font-semibold py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase tracking-wide text-sm sm:text-base min-h-[48px] touch-manipulation ${
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