"use client"; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from "react";
import Column from "./column";
import Row from "./row";
import ButtonGetStart from "./button-get-start";
import { BsShieldLockFill } from "react-icons/bs";

type Props = {};

const priceList = [200, 500, 1000, 2500, 5000];

const FormBanner = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(2); // เริ่มต้นที่ $1000
  const [value, setValue] = useState(priceList[2]); // $1000
  const [isLoaded, setIsLoaded] = useState(false);

  // Optimize component loading
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: any) => {
    const sliderValue = parseInt(e.target.value);
    setSelectedIndex(sliderValue);
    setValue(priceList[sliderValue]);
  };

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
    setValue(priceList[index]);
  };

  // Prevent layout shift during loading
  if (!isLoaded) {
    return (
      <div className="bg-white rounded-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] mx-auto p-6 sm:p-8 lg:p-10 text-black shadow-xl min-h-[400px] animate-pulse">
        <div className="space-y-6">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-8 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] mx-auto p-6 sm:p-8 lg:p-10 text-black shadow-xl">
      <Column gap={6}>
        <p className="text-black font-medium text-3xl sm:text-4xl lg:text-5xl" aria-live="polite">
          ${value.toLocaleString()}
        </p>
        
        {/* Custom Slider */}
        <div className="relative">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={selectedIndex}
            onChange={handleChange}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
            style={{
              background: `linear-gradient(to right, #471396 0%, #471396 ${(selectedIndex / 4) * 100}%, #E5E7EB ${(selectedIndex / 4) * 100}%, #E5E7EB 100%)`
            }}
            aria-label={`Loan amount selector, current value $${value.toLocaleString()}`}
          />
          <div className="flex justify-between mt-3" role="presentation">
            {priceList.map((amount, index) => (
              <div
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                  selectedIndex === index ? 'bg-custom-blue' : 'bg-gray-300'
                } transition-colors`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Amount Buttons */}
        <div className="space-y-2">
          {/* First row: $200, $500, $1000, $2500 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {priceList.slice(0, 4).map((item, key) => (
              <button
                key={key}
                onClick={() => handleButtonClick(key)}
                className={`px-3 py-3 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all touch-manipulation min-h-[44px] ${
                  selectedIndex === key
                    ? 'bg-custom-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                }`}
                aria-pressed={selectedIndex === key}
                aria-label={`Select loan amount $${item.toLocaleString()}`}
              >
                ${item.toLocaleString()}
              </button>
            ))}
          </div>
          
          {/* Second row: $5000 full width */}
          <button
            onClick={() => handleButtonClick(4)}
            className={`w-full px-3 py-3 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all touch-manipulation min-h-[44px] ${
              selectedIndex === 4
                ? 'bg-custom-blue text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
            }`}
            aria-pressed={selectedIndex === 4}
            aria-label="Select maximum loan amount $5,000"
          >
            $5,000+
          </button>
        </div>

        <div>
          <ButtonGetStart />
        </div>

        {/* Security Message with Icon */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 bg-green-50 border border-green-200 rounded-lg p-3">
          <BsShieldLockFill className="text-green-600 w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span className="text-center">We use 256 bit SSL technology to encrypt your data.</span>
        </div>
      </Column>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #471396;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          touch-action: manipulation;
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #471396;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          touch-action: manipulation;
        }

        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            height: 28px;
            width: 28px;
          }
          
          .slider::-moz-range-thumb {
            height: 28px;
            width: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default FormBanner;