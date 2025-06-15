"use client"; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from "react";
import Column from "./column";
import Row from "./row";
import ButtonGetStart from "./button-get-start";

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
    <div className="bg-white rounded-lg w-[350px] md:w-[550px] mx-auto p-10 text-black">
      <Column gap={6}>
        <p className="text-black font-medium text-5xl">${value.toLocaleString()}</p>
        
        {/* Custom Slider */}
        <div className="relative">
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={selectedIndex}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(selectedIndex / 3) * 100}%, #E5E7EB ${(selectedIndex / 3) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between mt-2">
            {priceList.map((amount, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  selectedIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                } transition-colors`}
              />
            ))}
          </div>
        </div>

        {/* Amount Buttons */}
        <Row className="justify-between gap-2">
          {priceList.map((item, key) => (
            <button
              key={key}
              onClick={() => handleButtonClick(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedIndex === key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ${item.toLocaleString()}
            </button>
          ))}
        </Row>

        <div>
          <ButtonGetStart />
        </div>

        <Column className="text-md font-normal max-w-[200px] mx-auto">
          <div>{`Apply now and get a 
decision within minutes`}</div>
        </Column>
      </Column>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default FormBanner;