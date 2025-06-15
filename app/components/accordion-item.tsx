"use client";

import React, { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import Column from "./column";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

type Props = {
  data: any;
  firstActive?: boolean;
};

const AccordionItem = ({ data, firstActive }: Props) => {
  const [open, setOpen] = useState(firstActive);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <Column
        className={`cursor-pointer transition-all duration-300 ${
          open ? "bg-white" : "bg-gray-50 hover:bg-gray-100"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center p-6 lg:p-8">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
            {data.title}
          </h3>
          <div className="flex-shrink-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              open ? "bg-blue-600 text-white rotate-180" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}>
              {open ? <AiOutlineMinus size={16} /> : <GoPlus size={16} />}
            </div>
          </div>
        </div>
        
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px] pb-6 lg:pb-8" : "max-h-0"
          }`}
        >
          <div 
            className="px-6 lg:px-8 text-gray-600 leading-relaxed prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </Column>
    </div>
  );
};

export default AccordionItem;