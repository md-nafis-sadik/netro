import SectionSubHeader from "@/components/common/SectionSubHeader";
import SectionHeader from "../common/SectionHeader";
import { awardsData } from "@/services/data";
import AwardItem from "./AwardItem";
import { awardsBgDown, awardsBgUp } from "@/services/assets/images";
import Image from "next/image";

const AwardsRecognition = () => {
  return (
    <section className="relative bg-[#FBE266] w-full py-20 md:py-32 overflow-hidden">
      {/* Background Pattern - Top Right */}
      <div className="absolute top-0 right-0 w-1/3 md:w-1/4 opacity-30 pointer-events-none">
        <Image
          src={awardsBgUp}
          alt="Awards background pattern"
          className="w-full h-auto"
        />
      </div>

      {/* Background Pattern - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-1/3 md:w-1/4 opacity-30 pointer-events-none">
        <Image
          src={awardsBgDown}
          alt="Awards background pattern"
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 flex_center flex-col w-full">
        <SectionSubHeader
          text="SERVICES"
          className="bg-white text-black border-none"
        />

        <SectionHeader className="home_journal_header_v2 text-5xl md:text-[96px] mt-5">
          Awards & Recognition
        </SectionHeader>

        <div className="containerX mt-10 md:mt-20 lg:mt-36 w-full">
          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 md:gap-12">
            {awardsData.map((award, index) => (
              <AwardItem key={index} {...award} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
