"use client";

import React, { useEffect, useRef, useState } from "react";
import Column from "./column";
import Row from "./row";
import ButtonGetStart from "./button-get-start";

type Props = {};

const priceList = [200, 1500, 3000];

const FormBanner = (props: Props) => {
  const [value, setValue] = useState(1500);
  const iconDotRef = useRef(null);
  const [currentRange, setCurrentRange] = useState("100");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    const value = e.target.value;
    const iconDot = iconDotRef.current;
    const rangeWidth = e.target.clientWidth;
    const offset = (value / e.target.max) * rangeWidth - 20;
    setCurrentRange(offset.toString());
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 w-full">
      <Column className="gap-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-gray-800">Get Your Loan</h3>
          <p className="text-gray-600">Choose your amount</p>
        </div>
        
        <div className="text-center">
          <div className="text-5xl font-bold text-blue-900 mb-4">${value.toLocaleString()}</div>
          <div className="relative">
            <input
              type="range"
              min="200"
              max="3000"
              value={value}
              onChange={handleChange}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              id="input-range"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              {priceList.map((item, key) => (
                <span key={key}>${item.toLocaleString()}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ButtonGetStart />
          <div className="text-center text-sm text-gray-600 leading-relaxed">
            Apply now and get a decision within minutes
          </div>
        </div>
      </Column>
    </div>
  );
};

export default FormBanner;