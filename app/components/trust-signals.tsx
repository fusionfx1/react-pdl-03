import React from "react";
import { IoShieldCheckmark, IoLockClosed, IoCheckmarkCircle } from "react-icons/io5";

type Props = {};

const TrustSignals = (props: Props) => {
  const trustItems = [
    {
      icon: IoShieldCheckmark,
      title: "SSL Secured",
      description: "256-bit encryption"
    },
    {
      icon: IoLockClosed,
      title: "Privacy Protected",
      description: "Your data is safe"
    },
    {
      icon: IoCheckmarkCircle,
      title: "Trusted Network",
      description: "Verified lenders only"
    }
  ];

  return (
    <section className="py-8 bg-gray-50 border-t">
      <div className="my-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <div className="bg-white rounded-full p-2 shadow-sm">
                  <IconComponent className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </div>
            );
          })}
          
          {/* BBB Rating */}
          <div className="flex items-center gap-3 text-gray-700">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div className="text-xs font-bold text-blue-600">A+</div>
            </div>
            <div>
              <div className="font-medium text-sm">BBB Rating</div>
              <div className="text-xs text-gray-500">Accredited Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
