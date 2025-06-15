import React from "react";
import Column from "./column";
import Image from "next/image";
import { content } from "../content/text";

type Props = {};

const How = (props: Props) => {
  return (
    <div className="my-container !py-24">
      <div className="text-4xl font-medium text-center ">
        How can {content.domain} help?
      </div>

      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div>
          <Column className="gap-6  items-center text-center max-w-[250px] mx-auto">
            <div>
              <Image
                src={"/images/cellphone.png"}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="text-main text-3xl font-medium">
              Mobile Friendly
            </div>
            <div>Easy application online and from your mobile on-the-go</div>
          </Column>
        </div>
        <div>
          <Column className="gap-6  items-center text-center max-w-[250px] mx-auto">
            <div>
              <Image
                src={"/images/forward.png"}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="text-main text-3xl font-medium">Fast Funding</div>
            <div>Funds transferred quickly to your account when approved</div>
          </Column>
        </div>
        <div>
          <Column className="gap-6  items-center text-center max-w-[250px] mx-auto">
            <div>
              <Image
                src={"/images/coins.png"}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="text-main text-3xl font-medium">Loan Amounts</div>
            <div>Loan amounts offers from $200 to $5,000</div>
          </Column>
        </div>
        <div>
          <Column className="gap-6  items-center text-center max-w-[250px] mx-auto">
            <div>
              <Image
                src={"/images/coffee.png"}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="text-main text-3xl font-medium">
              Personal Service
            </div>
            <div>Loans suited to your personal needs and circumstances</div>
          </Column>
        </div>
      </div>
    </div>
  );
};

export default How;
