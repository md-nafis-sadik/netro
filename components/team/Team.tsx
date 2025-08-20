"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import useEmblaCarousel from "embla-carousel-react";
import TeamCard from "./TeamCard";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import SectionHeader from "../common/SectionHeader";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type TeamMember = {
  image: string;
  name: string;
  position: string;
  socials: {
    type: string;
    link: string;
    icon: React.ReactNode;
  }[];
};

type TeamProps = {
  teamData: TeamMember[];
};
const Team = ({teamData}: TeamProps) => {
  const autoplay = useRef<ReturnType<typeof Autoplay> | null>(null);

  if (!autoplay.current) {
    autoplay.current = Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      playOnInit: false,
    });
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: false },
    [autoplay.current]
  );

  const handleMouseEnter = () => {
    if (autoplay.current) {
      autoplay.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay.current) autoplay.current.stop();
  };

  return (
    <section className="flex_center flex-col mt-20 mb-[120px] select-none">
      <SectionSubHeader text="Our Team" />

      <SectionHeader className="home_team_header mt-6">
        Meet the experts
      </SectionHeader>

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div
          className="w-full overflow-x-hidden"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
