"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import useEmblaCarousel from "embla-carousel-react";
import TeamCard from "./TeamCard";
import { teamData } from "@/services/data";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import SectionHeader from "../common/SectionHeader";
import Autoplay from "embla-carousel-autoplay";

const Team = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="flex_center flex-col mt-20 mb-[120px] select-none">
      <SectionSubHeader text="Our Team" />

      <SectionHeader className="home_team_header mt-6">
        Meet the experts
      </SectionHeader>

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full overflow-x-hidden" ref={emblaRef}>
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
