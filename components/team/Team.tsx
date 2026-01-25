"use client";
import { useRef } from "react";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { teamData } from "@/services/data/team.data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "../common/SectionHeader";
import TeamCard from "./TeamCard";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";

const Team = () => {
  const autoplayPlugin = useRef(Autoplay({ delay: 3000 }));
  const options = { align: "start", loop: true } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    autoplayPlugin.current,
  ]);
  const sectionRef = useAppearanceAnimation(".animate-item2", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.1,
  });
  return (
    <section
      className="flex_center flex-col pb-8 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20 select-none bg-darkPurplebg"
      ref={sectionRef}
    >
      <SectionSubHeader text="The force behind" blue />

      <div>
        <SectionHeader className="home_statistics_header_v2 text-5xl md:text-[96px] mt-1 md:mt-0">
          OUR Teams
        </SectionHeader>
      </div>

      <div className="container w-full mt-6 mb-6 md:my-20 hidden lg:block">
        <div className="w-full">
          <div
            className="
              w-full
              flex lg:grid
              flex-row
              lg:grid-cols-3
              gap-4 md:gap-6
              overflow-x-auto lg:overflow-visible
              scrollbar-hide
            "
          >
            {teamData.map(({ image, name, position }, index) => (
              <div key={index} className="team-card animate-item2">
                <TeamCard image={image} name={name} position={position} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="containerX w-full mt-6 mb-6 md:my-20 overflow-hidden lg:hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full flex">
            {teamData.map(({ image, name, position }, index) => (
              <div
                key={index}
                className="min-w-[48%] lg:min-w-0 mx-2 animate-item2"
              >
                <TeamCard image={image} name={name} position={position} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <ArrowLineupButton
          lineColor={colors.secondary[300]}
          textClassName="text-white"
        >
          See All
        </ArrowLineupButton>
      </div>
    </section>
  );
};

export default Team;
