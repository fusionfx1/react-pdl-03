"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  const [isLoadingForm, setIsLoadingForm] = useState(true);

  useEffect(() => {
    // Function to clean up existing script and form container
    const cleanupExistingResources = () => {
      const existingScript = document.getElementById('lg-form-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Remove form container from body if it exists
      const existingFormContainer = document.body.querySelector('#_lg_form_');
      if (existingFormContainer) {
        existingFormContainer.remove();
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

        // Clean up any existing resources first
        cleanupExistingResources();

        // Create form container directly in document.body
        const formContainer = document.createElement('div');
        formContainer.id = '_lg_form_';
        formContainer.style.minHeight = '100vh';
        formContainer.style.backgroundColor = '#f9fafb';
        document.body.appendChild(formContainer);

        // Create new script element with unique ID
        const script = document.createElement('script');
        script.id = 'lg-form-script';
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
      }
    };

    // Load the script when component mounts
    loadFormScript();

    // Cleanup function - runs when component unmounts (e.g., when user navigates back)
    return () => {
      cleanupExistingResources();
      
      // Clear the form configuration
      if (typeof window !== 'undefined') {
        delete (window as any)._lg_form_init_;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

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
      
      {/* Note: The form container is now created directly in document.body via JavaScript */}
    </div>
  );
};

export default FormLoadPage;