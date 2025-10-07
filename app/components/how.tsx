import React from "react";
import Column from "./column";
import Image from "next/image";
import { content } from "../content/text";

type Props = {};

const features = [
  {
    image: "/images/cellphone.png",
    title: "Mobile Friendly Application",
    description: "Easy online loan application from your mobile device on-the-go",
    color: "from-custom-blue to-custom-blue-light",
    alt: "Mobile phone showing loan application interface",
    priority: true // Mark first image as priority
  },
  {
    image: "/images/forward.png",
    title: "Fast Funding Process",
    description: "Quick loan funds transferred directly to your account when approved",
    color: "from-green-500 to-green-600",
    alt: "Fast forward arrow indicating quick loan processing",
    priority: false
  },
  {
    image: "/images/coins.png",
    title: "Flexible Loan Amounts",
    description: "Loan amounts from $200 to $5,000 to meet your needs",
    color: "from-purple-500 to-purple-600",
    alt: "Stack of coins representing loan amounts",
    priority: false
  },
  {
    image: "/images/coffee.png",
    title: "Personal Service",
    description: "Customized loans suited to your personal financial needs and circumstances",
    color: "from-orange-500 to-orange-600",
    alt: "Coffee cup representing personal customer service",
    priority: false
  }
];

const How = (props: Props) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="how-it-works">
      <div className="my-container">
        <header className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            How {content.domain} Helps You Get Fast Loans
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We make getting a loan simple, fast, and secure with our streamlined online process
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border border-gray-100 touch-manipulation"
            >
              <Column className="items-center text-center space-y-4 sm:space-y-6">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white rounded-full p-3 sm:p-4 shadow-lg aspect-ratio-1-1 flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={60}
                      height={60}
                      className="w-15 h-15 sm:w-20 sm:h-20 object-contain"
                      loading={feature.priority ? "eager" : "lazy"}
                      priority={feature.priority}
                      sizes="(max-width: 640px) 60px, 80px"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-custom-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </Column>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;