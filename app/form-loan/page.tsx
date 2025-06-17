"use client";

import React, { useEffect } from "react";

type Props = {};

const FormLoadPage = (props: Props) => {
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
        };
        
        // Add script to head
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <div>
      {/* External form container */}
      <div id="_lg_form_"></div>
    </div>
  );
};

export default FormLoadPage;