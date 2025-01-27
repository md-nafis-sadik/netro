import { coreStrengthsServicesData } from "@/services/data";
import SectionHeader from "../common/SectionHeader";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

const ServiceStrengthAreas = () => {
  return (
    <section className="bg-black py-10 md:py-[120px]">
      <div className="containerX">
        <SectionHeader text="Our Core Strengths" lite />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-10 md:mt-20">
          {coreStrengthsServicesData.map(({ serial, title, text }, index) => (
            <Fragment key={index}>
              <div className="flex items-start gap-2">
                {/* SERIAL */}
                <p
                  className={cn(
                    "text-2xl md:text-7xl lg:text-[128px] font-bold !leading-[0.9] uppercase h-full font-scout-cond",
                    index % 2 === 0 ? "text-secondary-400" : "text-[#4DD165]"
                  )}
                >
                  {serial}
                </p>

                {/* DESCRIPTION */}
                <div className="ms-2 md:ms-20 max-w-[204px] md:max-w-[674px]">
                  <p
                    className={cn(
                      "text-2xl md:text-4xl lg:text-[64px] font-bold !leading-none uppercase text-white font-scout-cond"
                    )}
                  >
                    {title}
                  </p>

                  <p
                    className={cn(
                      "mt-2 text-xs md:text-xl lg:text-[32px] font-normal !leading-[1.4] text-text-200"
                    )}
                  >
                    {text}
                  </p>
                </div>
              </div>

              {index < coreStrengthsServicesData.length - 1 &&
                (index + 1) % 2 === 0 && (
                  <div className="h-0 w-full border-t border-dashed border-natural-900 col-span-2 my-10 hidden md:block" />
                )}
              {index < coreStrengthsServicesData.length - 1 && (
                <div className="h-0 w-full border-t border-dashed border-natural-900 my-6 block md:hidden" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStrengthAreas;
