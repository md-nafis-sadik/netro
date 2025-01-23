"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import useEmblaCarousel from "embla-carousel-react";

const Team = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="flex_center flex-col mt-20 mb-[120px]">
      <SectionSubHeader text="Our Team" />
      <SectionHeader dark text="Meet the experts" />

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10 pe-4 md:pe-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
