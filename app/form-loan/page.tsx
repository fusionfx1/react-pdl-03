"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  const [isLoadingForm, setIsLoadingForm] = useState(true);

  useEffect(() => {
    // Manage browser history to prevent form reloading on back navigation
    const manageHistory = () => {
      // Replace current history entry to prevent back navigation to this same page
      if (typeof window !== 'undefined' && window.history) {
        // Replace the current state with a marker to identify this as a form page
        window.history.replaceState(
          { formPage: true, timestamp: Date.now() },
          '',
          window.location.href
        );

        // Add a popstate listener to handle back navigation
        const handlePopState = (event: PopStateEvent) => {
          // If user tries to go back from form page, redirect to home
          if (event.state?.formPage) {
            window.location.href = '/';
          }
        };

        window.addEventListener('popstate', handlePopState);

        // Cleanup function
        return () => {
          window.removeEventListener('popstate', handlePopState);
        };
      }
    };

    // Set up history management
    const cleanupHistory = manageHistory();

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

    // Return cleanup function
    return cleanupHistory;
  }, []);

  // Prevent accidental navigation away from form
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Only show warning if form might have data
      const formElement = document.getElementById('_lg_form_');
      if (formElement && formElement.innerHTML.trim() !== '') {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your loan application progress may be lost.';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Loading indicator while script loads */}
      {isLoadingForm && (
        <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-blue mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Loading secure loan application form...</p>
            <p className="text-gray-500 text-sm mt-2">Please wait while we prepare your application</p>
          </div>
        </div>
      )}
      
      {/* Header for form page */}
      <div className="bg-white shadow-sm border-b">
        <div className="my-container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Loan Application</h1>
            <button
              onClick={() => window.location.href = '/'}
              className="text-gray-600 hover:text-gray-800 text-sm underline"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
      
      {/* External form container - now part of React component structure */}
      <div id="_lg_form_" className="w-full min-h-screen"></div>
    </div>
  );
};

export default FormLoadPage;