"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ButtonGetStart = (props: Props) => {
  const { push } = useRouter();
  
  return (
    <button
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 uppercase tracking-wide"
      onClick={() => push("/form-loan")}
    >
      Get Started
    </button>
  );
};

export default ButtonGetStart;