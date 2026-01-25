"use client";

import { ArrowPointerIcon, DashedCurvePathDesktop, DashedCurvePathMobile } from "@/services/assets/svgs";

const CarrierFlowSection = ({ items }: any) => {
  return (
    <div className="pt-20">
      <div className="w-full mx-auto relative">
        {/* SVG for the curve path */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20">
          <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[423px]">
            {/* Desktop version */}
            <DashedCurvePathDesktop className="hidden sm:block w-full h-auto" />
            
            {/* Mobile version */}
            <DashedCurvePathMobile className="block sm:hidden w-full h-auto" />

            {/* Pointer that follows the path */}
            <span className="absolute top-[42%] left-[55%] pointer-events-none z-2">
              <ArrowPointerIcon className="w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[49px] h-auto" />
            </span>
          </div>
        </div>

        {/* Content items */}
        <div
          className="relative grid grid-rows-4 gap-8 sm:gap-4 md:gap-0"
          style={{ zIndex: 0, height: "100%" }}
        >
          {items.map((item: any, index: number) => (
            <div key={index} className="flex items-start">
              <div
                className={`flex items-start gap-8 ${
                  item.position === "right" ? "ml-auto" : ""
                }`}
              >
                {item.position === "left" && (
                  <div className="flex items-center gap-6 md:gap-10 lg:gap-14 max-w-[450px]">
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
                  <div className="flex items-center gap-6 md:gap-10 lg:gap-14 max-w-[450px]">
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