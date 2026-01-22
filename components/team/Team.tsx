"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { teamData } from "@/services/data/team.data";
import SectionHeader from "../common/SectionHeader";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="flex_center flex-col pb-10 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20 select-none bg-darkPurplebg">
      <SectionSubHeader text="The force behind" blue />

      <SectionHeader className="home_statistics_header_v2 text-5xl md:text-[96px] mt-1 md:mt-0">
        OUR Teams
      </SectionHeader>

      <div className="containerX w-full mt-6 mb-6 md:my-20">
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
              <div key={index} className="min-w-[48%] lg:min-w-0">
                <TeamCard image={image} name={name} position={position} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ArrowLineupButton
        lineColor={colors.secondary[300]}
        textClassName="text-white"
      >
        See All
      </ArrowLineupButton>
    </section>
  );
};

export default Team;
