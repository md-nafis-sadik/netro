"use client";

import { ArrowPointerIcon } from "@/services/assets/svgs";

const CarrierFlowSection = ({ items }: any) => {
  return (
    <div className="pt-20">
      <div className="w-full mx-auto relative">
        {/* SVG for the curve path */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="423"
              height="447"
              viewBox="0 0 423 447"
              fill="none"
            >
              <path
                d="M41.5068 1.48438C115.507 11.9844 243.59 27.5359 340.504 66.4844C436.229 104.955 394.703 177.133 340.504 188.484L61.5042 245.484C-11.3123 261.196 -28.5064 355.484 70.2624 374.196C157.849 390.79 358.817 429.496 422.007 444.984"
                stroke="#FF9F43"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
            </svg>

            {/* Pointer that follows the path */}
            <span className="absolute top-[190px] left-[235px] pointer-events-none z-2">
              <ArrowPointerIcon />
            </span>
          </div>
        </div>

        {/* Content items */}
        <div
          className="relative grid grid-rows-4 gap-0"
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
                  <div className="flex items-center gap-8 md:gap-10 lg:gap-14 max-w-[450px]">
                    <span className="text-[140px] font-bold text-[#FFFCC5] leading-none select-none font-scoutcond">
                      {item.number}
                    </span>
                    <div className="max-w-[340px]">
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
                {item.position === "right" && (
                  <div className="flex items-center gap-8 md:gap-10 lg:gap-14 max-w-[450px]">
                    <span className="text-[140px] font-bold text-[#FFFCC5] leading-none select-none font-scoutcond">
                      {item.number}
                    </span>
                    <div className="max-w-[340px]">
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
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
