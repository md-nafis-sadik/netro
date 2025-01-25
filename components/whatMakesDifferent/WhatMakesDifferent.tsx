import SectionHeader from "@/components/common/SectionHeader";
import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { whatMakesDifferentData } from "@/services/data";
import Image from "next/image";
import { Fragment } from "react";

const WhatMakesDifferent = () => {
  return (
    <section className="bg-black py-10 md:py-[120px]">
      <div className="containerX">
        <SectionHeader
          text="What Makes Us Different"
          className="text-start"
          lite
        />

        <div className="mt-10 md:mt-20 flex flex-col">
          {whatMakesDifferentData.map(
            ({ title, description, image, imageClassName, serial }, index) => (
              <Fragment>
                <div
                  key={index}
                  className="flex items-center gap-2 justify-between"
                >
                  {/* SERIAL */}
                  <p
                    className={cn(
                      scoutCond.className,
                      "text-2xl md:text-[128px] font-bold !leading-[0.9] uppercase h-full",
                      index % 2 === 0 ? "text-secondary-400" : "text-[#4DD165]"
                    )}
                  >
                    {serial}
                  </p>

                  {/* DESCRIPTION */}
                  <div className="ms-2 md:ms-20 max-w-[204px] md:max-w-[674px]">
                    <p
                      className={cn(
                        scoutCond.className,
                        "text-2xl md:text-[64px] font-bold !leading-none uppercase text-white"
                      )}
                    >
                      {title}
                    </p>

                    <p
                      className={cn(
                        "mt-2 text-xs md:text-[32px] font-normal !leading-[1.4] text-text-200"
                      )}
                    >
                      {description}
                    </p>
                  </div>

                  <div className="w-[78px] md:w-[328px] h-[78px] md:h-[328px] flex_center !shrink-0">
                    <Image
                      src={image}
                      alt={title}
                      className={cn(imageClassName)}
                      height={600}
                      width={600}
                    />
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="w-full h-0 border-t my-6 md:my-10 border-natural-900 border-dashed" />
              </Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
