"use client";

import { useCarrierFlowAnimation } from "@/hooks/usePortfolioAnimation";
import {
  DashedCurvePointerDesktop,
  DashedCurvePointerMobile,
} from "@/services/assets/svgs";
import React from "react";

const CarrierFlowSection = ({ items }: any) => {
  const sectionRef = useCarrierFlowAnimation();

  return (
    <div className="pt-20" ref={sectionRef}>
      <div className="max-w-[1176px] w-full mx-auto relative">
        {/* Desktop version */}
        <DashedCurvePointerDesktop className="absolute top-10 lg:top-16 left-1/2 translate-x-[-60%] hidden sm:block w-full max-w-[40%] md:max-w-[30%] lg:max-w-[40%] h-[80%]" />

        {/* Mobile version */}
        <DashedCurvePointerMobile className="absolute top-0 left-0 block sm:hidden w-full max-w-[90%] xs:max-w-[50%] h-full" />

        {/* Content items */}
        <div
          className="relative grid grid-rows-4 gap-8 sm:gap-4 md:gap-0"
          style={{ zIndex: 0, height: "100%" }}
        >
          {items.map((item: any, index: number) => (
            <div key={index} className="flex items-start">
              <div
                className={`flex items-start gap-8 ${
                  item.position === "right" ? "sm:ml-auto" : ""
                }`}
              >
                {item.position === "left" && (
                  <div className="flex items-center gap-6 md:gap-10 lg:gap-14 sm:max-w-[450px]">
                    <span className="text-[62px] sm:text-[83px] md:text-[104px] lg:text-[125px] xl:text-[140px] font-bold text-[#FFFCC5] leading-none select-none font-scoutcond">
                      {item.number}
                    </span>
                    <div className="max-w-[340px]">
                      <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
                {item.position === "right" && (
                  <div className="flex items-center gap-6 md:gap-10 lg:gap-14 sm:max-w-[450px]">
                    <span className="text-[62px] sm:text-[83px] md:text-[104px] lg:text-[125px] xl:text-[140px] font-bold text-[#FFFCC5] leading-none select-none font-scoutcond">
                      {item.number}
                    </span>
                    <div className="max-w-[340px]">
                      <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrierFlowSection;
