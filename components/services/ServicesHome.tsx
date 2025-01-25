"use client";
import SectionHeader from "@/components/common/SectionHeader";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ServiceCard from "./ServiceHomeCard";
import useEmblaCarousel from "embla-carousel-react";
import { servicesHomeData } from "@/services/data";

const ServicesHome = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="flex_center flex-col mt-20 mb-[120px]">
      <SectionSubHeader text="Services" />
      <SectionHeader dark text="Solutions for You" />

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10 pe-4 md:pe-20">
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

export default ServicesHome;
