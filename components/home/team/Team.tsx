"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import useEmblaCarousel from "embla-carousel-react";
import TeamCard from "./TeamCard";
import { teamData } from "@/services/data";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";

const Team = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="flex_center flex-col mt-20 mb-[120px] select-none">
      <SectionSubHeader text="Our Team" />
      <SectionHeader dark text="Meet the experts" className="mt-6" />

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-4 md:gap-6 py-5 md:py-10 pe-4 md:pe-20">
            {teamData.map(({ image, name, position, socials }, index) => (
              <TeamCard
                key={index}
                image={image}
                name={name}
                position={position}
                socials={socials}
              />
            ))}
          </div>
        </div>
      </div>

      <ArrowLineupButton lineColor={colors.secondary[300]}>
        Meet our team
      </ArrowLineupButton>
    </section>
  );
};

export default Team;
