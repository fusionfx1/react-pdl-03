"use client"; // This is a client component 👈🏽

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const ButtonGetStart = (props: Props) => {
  const { push } = useRouter();
  return (
    <div>
      <a href="/form-loan">
        <div
          className="text-white bg-main w-full p-4 rounded-sm  uppercase font-normal"
          onClick={() => push("/form-loan")}
        >
          {" "}
          get started
        </div>
      </a>
    </div>
  );
};

export default ButtonGetStart;
