"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import ServiceCard from "./ServiceCard";
import { servicesHomeData } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "@/hooks/WindowDimensions";

const Services = () => {
  const [spaceStart, setSpaceStart] = useState<Number>(0);

  const options = { align: "start" as "start", loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1536) {
      setSpaceStart(224);
    } else if (width >= 1280) {
      setSpaceStart(128);
    } else if (width >= 640) {
      setSpaceStart(64);
    } else {
      setSpaceStart(32);
    }
  }, [width]);

  return (
    <section className="flex_center flex-col mt-20 mb-[120px]">
      <SectionSubHeader text="Services" />
      <SectionHeader dark text="Solutions for You" />

      <div className="w-full overflow-x-hidden overflow-y-visible mt-10 md:mt-20">
        <div className="w-full" ref={emblaRef}>
          <div
            className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-1 pe-4 md:pe-20"
            style={{
              marginInlineStart: `${spaceStart}px`,
            }}
          >
            {servicesHomeData.map(
              ({ title, text, link, imageComponent }, index) => (
                <ServiceCard
                  key={index}
                  title={title}
                  text={text}
                  imageComponent={imageComponent}
                  link={link}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
