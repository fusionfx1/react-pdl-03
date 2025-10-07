"use client";

import React, { useState, useEffect } from "react";
import { IoCheckmarkCircle, IoTime, IoPeople, IoArrowForward } from "react-icons/io5";

type Props = {};

const SocialProof = (props: Props) => {
  const [applicationsToday, setApplicationsToday] = useState(0);
  const [recentApprovals, setRecentApprovals] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Random number between 1-5 for applications today
      setApplicationsToday(prev => prev + Math.floor(Math.random() * 5) + 1);
      
      // Add random recent approvals
      const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomAmount = Math.floor(Math.random() * 4000) + 1000;
      
      setRecentApprovals(prev => [
        `${randomCity} - $${randomAmount.toLocaleString()}`,
        ...prev.slice(0, 3) // Keep only last 4
      ]);
    }, 3000); // Update every 3 seconds

    // Initial values
    setApplicationsToday(1247);
    setRecentApprovals([
      "Miami - $2,500",
      "Seattle - $1,800", 
      "Denver - $3,200",
      "Atlanta - $1,500"
    ]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 shadow-lg z-30 safe-area-inset-bottom">
      <div className="my-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
          {/* Applications Today */}
          <div className="flex items-center gap-2 text-gray-700">
            <IoPeople className="text-green-600" size={18} />
            <span className="font-medium">
              <span className="text-green-600 font-bold">{applicationsToday.toLocaleString()}</span> applications today
            </span>
          </div>

          {/* Recent Approvals */}
          <div className="flex items-center gap-2 text-gray-700">
            <IoCheckmarkCircle className="text-green-600" size={18} />
            <span className="font-medium">Recent approvals:</span>
            <div className="flex gap-1 sm:gap-2 text-xs">
              {recentApprovals.slice(0, 2).map((approval, index) => (
                <span key={index} className="bg-green-100 text-green-700 px-1 sm:px-2 py-1 rounded-full text-xs">
                  {approval}
                </span>
              ))}
            </div>
          </div>

          {/* Processing Time */}
          <div className="flex items-center gap-2 text-gray-700">
            <IoTime className="text-blue-600" size={18} />
            <span className="font-medium">
              Average processing: <span className="text-blue-600 font-bold">2-5 minutes</span>
            </span>
          </div>
        </div>
        
        {/* Apply Button */}
        <div className="mt-3 pt-3 border-t border-gray-200">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Button clicked!');
              
              const formElement = document.getElementById('_lg_form_');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[56px] active:scale-[0.98]"
            style={{ pointerEvents: 'auto' }}
          >
            Apply Now
            <IoArrowForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
