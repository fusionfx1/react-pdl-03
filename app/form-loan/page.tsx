"use client";

import React, { useEffect } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  useEffect(() => {
    // Function to clean up existing script
    const cleanupExistingScript = () => {
      const existingScript = document.getElementById('lg-form-script');
      if (existingScript) {
        existingScript.remove();
      }
    };

    // Function to load the form script
    const loadFormScript = () => {
      if (typeof window !== 'undefined') {
        // Set the form configuration
        (window as any)._lg_form_init_ = {
          aid: "14881",
          template: "fresh"
        };

        // Clean up any existing script first
        cleanupExistingScript();

        // Create new script element with unique ID
        const script = document.createElement('script');
        script.id = 'lg-form-script';
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://apikeep.com/form/applicationInit.js';
        
        script.onerror = () => {
          console.error('Failed to load loan application script');
        };
        
        script.onload = () => {
          console.log('Loan application script loaded successfully');
        };
        
        // Add script to head
        document.head.appendChild(script);
      }
    };

    // Load the script when component mounts
    loadFormScript();

    // Cleanup function - runs when component unmounts (e.g., when user navigates back)
    return () => {
      cleanupExistingScript();
      
      // Also clean up the form container if it exists
      const formContainer = document.getElementById('_lg_form_');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
      
      // Clear the form configuration
      if (typeof window !== 'undefined') {
        delete (window as any)._lg_form_init_;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Loading indicator while script loads */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading loan application form...</p>
        </div>
      </div>
      
      {/* External form container */}
      <div id="_lg_form_"></div>
    </div>
  );
};

export default FormLoadPage;