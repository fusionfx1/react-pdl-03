"use client";

import React, { useEffect } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    
    const loadFormScript = () => {
      if (typeof window !== 'undefined') {
        // Set the form configuration
        (window as any)._lg_form_init_ = {
          aid: "14881",
          template: "fresh"
        };

        // Remove any existing script to ensure fresh load
        const existingScript = document.querySelector('script[src="https://apikeep.com/form/applicationInit.js"]');
        if (existingScript) {
          existingScript.remove();
        }

        // Clear any existing form container
        const existingContainer = document.getElementById('_lg_form_');
        if (existingContainer) {
          existingContainer.innerHTML = '';
        }

        // Create new script element
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://apikeep.com/form/applicationInit.js';
        
        script.onload = () => {
          console.log('Loan form script loaded successfully');
        };
        
        script.onerror = () => {
          console.error('Failed to load loan application script');
          // Show fallback message
          const container = document.getElementById('_lg_form_');
          if (container) {
            container.innerHTML = `
              <div style="padding: 40px; text-align: center; background: #f8f9fa; border-radius: 8px; margin: 20px;">
                <h2 style="color: #dc3545; margin-bottom: 16px;">Unable to Load Application Form</h2>
                <p style="color: #6c757d; margin-bottom: 20px;">We're experiencing technical difficulties. Please try again in a few moments.</p>
                <button onclick="window.location.reload()" style="background: #007bff; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer;">
                  Reload Page
                </button>
              </div>
            `;
          }
        };
        
        // Add script to head
        document.head.appendChild(script);
      }
    };

    // Load the script immediately
    loadFormScript();

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Clear form container
      const container = document.getElementById('_lg_form_');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Loading indicator while script loads */}
      <div id="loading-indicator" className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading loan application form...</p>
        </div>
      </div>
      
      {/* External form container */}
      <div id="_lg_form_"></div>
      
      {/* Hide loading indicator once form loads */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Hide loading indicator when form content appears
          const checkFormLoaded = setInterval(() => {
            const formContainer = document.getElementById('_lg_form_');
            const loadingIndicator = document.getElementById('loading-indicator');
            
            if (formContainer && formContainer.children.length > 0) {
              if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
              }
              clearInterval(checkFormLoaded);
            }
          }, 500);
          
          // Fallback: hide loading after 10 seconds
          setTimeout(() => {
            const loadingIndicator = document.getElementById('loading-indicator');
            if (loadingIndicator) {
              loadingIndicator.style.display = 'none';
            }
            clearInterval(checkFormLoaded);
          }, 10000);
        `
      }} />
    </div>
  );
};

export default FormLoadPage;