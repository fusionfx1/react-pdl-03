"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already loaded or load it
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
        
        script.onload = () => {
          setScriptLoaded(true);
        };

        script.onerror = () => {
          console.error('Failed to load loan application script');
        };
        
        // Add script to head
        document.head.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="my-container">
        <div className="text-center mb-8 sm:mb-10 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Complete Your Loan Application
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Get your loan decision in minutes
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Loading state */}
            {!scriptLoaded && (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading application form...</p>
              </div>
            )}
            
            {/* External form container */}
            <div id="_lg_form_" className={`${!scriptLoaded ? 'hidden' : ''}`}></div>
            
            {/* Fallback message */}
            {scriptLoaded && (
              <div className="mt-8 text-center">
<p className="text-sm text-gray-500">
  If the form errors please refresh the page or contact support.
</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLoadPage;
