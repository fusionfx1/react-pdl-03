import React from "react";
import Column from "./column";
import Image from "next/image";
import { content } from "../content/text";

type Props = {};

const features = [
  {
    image: "/images/cellphone.png",
    title: "Mobile Friendly",
    description: "Easy application online and from your mobile on-the-go",
    color: "from-blue-500 to-blue-600"
  },
  {
    image: "/images/forward.png",
    title: "Fast Funding",
    description: "Funds transferred quickly to your account when approved",
    color: "from-green-500 to-green-600"
  },
  {
    image: "/images/coins.png",
    title: "Loan Amounts",
    description: "Loan amounts offers from $200 to $5,000",
    color: "from-purple-500 to-purple-600"
  },
  {
    image: "/images/coffee.png",
    title: "Personal Service",
    description: "Loans suited to your personal needs and circumstances",
    color: "from-orange-500 to-orange-600"
  }
];

const How = (props: Props) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="my-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            How can {content.domain} help?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make getting a loan simple, fast, and secure with our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <Column className="items-center text-center space-y-6">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white rounded-full p-4 shadow-lg">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Column>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;