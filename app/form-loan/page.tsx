"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  const [isLoadingForm, setIsLoadingForm] = useState(true);

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
        
        script.onerror = () => {
          console.error('Failed to load loan application script');
          setIsLoadingForm(false);
        };
        
        script.onload = () => {
          console.log('Loan application script loaded successfully');
          setIsLoadingForm(false);
        };
        
        // Add script to head
        document.head.appendChild(script);
      } else {
        setIsLoadingForm(false);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Loading indicator while script loads */}
      {isLoadingForm && (
        <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-blue mx-auto mb-4"></div>
            <p className="text-gray-600">Loading loan application form...</p>
          </div>
        </div>
      )}
      
      {/* External form container - now part of React component structure */}
      <div id="_lg_form_" className="w-full"></div>
    </div>
  );
};

export default FormLoadPage;