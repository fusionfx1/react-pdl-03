import React from "react";
import Column from "./column";
import { TiInputChecked } from "react-icons/ti";
import Row from "./row";
import FormBanner from "./form-banner";
import { content } from "../content/text";

type Props = {};

const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Banner = (props: Props) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute inset-0 bg-[url("${backgroundPattern}")]`}></div>
      </div>
      
      <div className="my-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <Column className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {content.domain}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {content.title1}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-light">
                {content.title2}
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Available for all credit types",
                "Money straight to your bank",
                "Safe, secure and reliable"
              ].map((item, index) => (
                <Row key={index} className="gap-3 text-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <TiInputChecked size={16} className="text-white" />
                  </div>
                  <span className="text-blue-50">{item}</span>
                </Row>
              ))}
            </div>
          </Column>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <FormBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;