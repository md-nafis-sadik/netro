"use client";

import { useProcessAnimation } from "@/hooks/useProcess";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  GlobeSearch,
  LightIcon,
  PainIcon,
} from "@/services/assets/svgs";
import { processData } from "@/services/data";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

const icons = {
  research: <GlobeSearch className="process-icon size-7 sm:size-8" />,
  architecture: <LightIcon className="process-icon size-8" />,
  design: <PainIcon className="process-icon size-7 sm:size-8" />,
  development: <CodeIcon className="process-icon size-7 sm:size-8" />,
};

function ProcessFollowed() {
  const { sectionRef, imageRef, handleHover, handleLeave,activeIndex } =
    useProcessAnimation();

  return (
    <section
      ref={sectionRef}
      data-bg-theme="light"
      className="bg-green-500 pb-10 pt-10 md:pt-16 lg:pt-20 overflow-hidden"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader text="How we make" className="process-sub" />
        <SectionHeader className="process-title mt-5 text-black">
          Process followed
        </SectionHeader>

        <div className="w-full relative mt-6 sm:mt-10 md:mt-16">
          <div className="process-grid grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-8 mb-12">
            {processData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={(e) => handleHover(index, e.currentTarget)}
                  onMouseLeave={(e) => handleLeave(e.currentTarget)}
                  className={cn(
                    "process-card py-5 px-3 md:p-3 border-b w-full relative cursor-pointer",
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-[3px] after:w-full after:origin-left after:transition-transform after:duration-700",
                    isActive
                      ? "bg-white border-[#74E49F] after:bg-[#3654FF] after:scale-x-100"
                      : "border-[#74E49F] after:bg-[#3654FF] after:scale-x-0",
                  )}
                >
                  {icons[item.icon as keyof typeof icons]}

                  <div className="flex flex-col mt-4 md:mt-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-black leading-[140%] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-[120%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div ref={imageRef}>
            <Image
              src={processData[activeIndex].image}
              alt="process active image"
              width={1200}
              height={800}
              className="w-full h-auto will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessFollowed;
