"use client"; // This is a client component 👈🏽

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
    <Column
      className={`border-b p-6 py-10  cursor-pointer   ${open ? "gap-10" : "gap-0"} transition-all duration-500`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between hover:text-main">
        <div className="text-xl font-normal">{data.title}</div>
        <div className="">
          {open ? <GoPlus size={25} /> : <AiOutlineMinus size={25} />}
        </div>
      </div>
      <div
        className={`${
          open ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden transition-all duration-300`}
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </Column>
  );
};

export default AccordionItem;
