"use client"; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from "react";
import Column from "./column";
import Row from "./row";
import ButtonGetStart from "./button-get-start";
import { BsShieldLockFill } from "react-icons/bs";

type Props = {};

const priceList = [500, 1000, 2500, 5000];

const FormBanner = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(1); // เริ่มต้นที่ $1000
  const [value, setValue] = useState(priceList[1]); // $1000

  const handleChange = (e: any) => {
    const sliderValue = parseInt(e.target.value);
    setSelectedIndex(sliderValue);
    setValue(priceList[sliderValue]);
  };

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
    setValue(priceList[index]);
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] mx-auto p-6 sm:p-8 lg:p-10 text-black shadow-xl">
      <Column gap={6}>
        <p className="text-black font-medium text-3xl sm:text-4xl lg:text-5xl">${value.toLocaleString()}</p>
        
        {/* Custom Slider */}
        <div className="relative">
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={selectedIndex}
            onChange={handleChange}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
            style={{
              background: `linear-gradient(to right, #003566 0%, #003566 ${(selectedIndex / 3) * 100}%, #E5E7EB ${(selectedIndex / 3) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between mt-3">
            {priceList.map((amount, index) => (
              <div
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                  selectedIndex === index ? 'bg-custom-blue' : 'bg-gray-300'
                } transition-colors`}
              />
            ))}
          </div>
        </div>

        {/* Amount Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:justify-between gap-2 sm:gap-2">
          {priceList.map((item, key) => (
            <button
              key={key}
              onClick={() => handleButtonClick(key)}
              className={`px-3 py-3 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all touch-manipulation min-h-[44px] ${
                selectedIndex === key
                  ? 'bg-custom-blue text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              ${item.toLocaleString()}
            </button>
          ))}
        </div>

        <div>
          <ButtonGetStart />
        </div>

        <Column className="text-sm sm:text-base font-normal max-w-[200px] mx-auto text-center">
          <div>{`Apply now and get a 
decision within minutes`}</div>
        </Column>

        {/* Security Message with Icon */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 bg-green-50 border border-green-200 rounded-lg p-3">
          <BsShieldLockFill className="text-green-600 w-4 h-4 flex-shrink-0" />
          <span className="text-center">We use 256 bit SSL technology to encrypt your data.</span>
        </div>
      </Column>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #003566;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          touch-action: manipulation;
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #003566;
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