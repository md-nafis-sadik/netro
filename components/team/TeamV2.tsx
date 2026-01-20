"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { teamDataV2 } from "@/services/data/team.data";
import SectionHeader from "../common/SectionHeader";
import TeamCardV2 from "./TeamCardV2";

const TeamV2 = () => {
  return (
    <section className="flex_center flex-col pt-20 pb-20 select-none bg-darkPurplebg">
      <SectionSubHeader text="The force behind" blue />

      <SectionHeader className="home_statistics_header_v2 text-5xl md:text-[96px] mt-1 md:mt-0">
        OUR Teams
      </SectionHeader>

      <div className="containerX w-full mt-6 md:my-20">
        <div className="w-full">
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {teamDataV2.map(({ image, name, position }, index: number) => (
              <TeamCardV2
                key={index}
                image={image}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </div>

      <ArrowLineupButton
        lineColor={colors.secondary[300]}
        textClassName="text-white"
      >
        Meet our team
      </ArrowLineupButton>
    </section>
  );
};

export default TeamV2;
