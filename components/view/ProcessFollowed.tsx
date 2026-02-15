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
import { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

const icons = {
  research: <GlobeSearch className="process-icon size-7 sm:size-8" />,
  architecture: <LightIcon className="process-icon size-8" />,
  design: <PainIcon className="process-icon size-7 sm:size-8" />,
  development: <CodeIcon className="process-icon size-7 sm:size-8" />,
};

function ProcessFollowed() {
  const { cardsRef, imageRef, handleHover, handleLeave, activeIndex } =
    useProcessAnimation();
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all images on mount
  useEffect(() => {
    processData.forEach((item, index) => {
      const img = new window.Image();
      img.src = typeof item.image === 'string' ? item.image : item.image.src;
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  // Handle image transition when activeIndex changes
  useEffect(() => {
    if (activeIndex !== currentImageIndex && imagesLoaded[activeIndex]) {
      setCurrentImageIndex(activeIndex);
    }
  }, [activeIndex, currentImageIndex, imagesLoaded]);


  return (
    <section
      data-bg-theme="light"
      className="bg-green-500 pb-10 pt-10 md:pt-16 lg:pt-20 overflow-hidden"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader text="How we make" className="process-sub" />
        <SectionHeader className="process-title mt-5 text-black">
          Process followed
        </SectionHeader>

        <div className="w-full relative mt-6 sm:mt-10 md:mt-16">
          <div
            className="process-grid grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-8 mb-12"
            ref={cardsRef}
          >
            {processData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={(e) => handleHover(index, e.currentTarget)}
                  onMouseLeave={(e) => handleLeave(e.currentTarget)}
                  className={cn(
                    "process-card py-5 px-3 md:p-3 border-b w-full relative cursor-pointer",
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-[5px] after:w-full after:origin-left after:transition-transform after:duration-700 rounded-xl md:rounded-2xl overflow-hidden",
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
              src={processData[currentImageIndex].image}
              alt="process active image"
              width={2400}
              height={1600}
              className="w-full h-auto will-change-transform rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessFollowed;
