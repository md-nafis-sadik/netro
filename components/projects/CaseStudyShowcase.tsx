"use client";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "../common/SectionHeader";
import CaseStudyCard from "./CaseStudyCard";
import ArrowLineupButton from "../ui/arrow-lineup-button";
import colors from "@/lib/colors";

const CaseStudyShowcase = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="bg-black py-10 md:pt-20 md:pb-[120px]">
      <SectionHeader lite text="Our Proud Creations" />

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <CaseStudyCard key={index} />
              ))}
          </div>
        </div>

        <div className="flex_center mt-10 md:mt-20">
          <ArrowLineupButton
            lineColor={colors.secondary[300]}
            className="!mt-0"
            textClassName="text-white"
          >
            See all projects
          </ArrowLineupButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;
