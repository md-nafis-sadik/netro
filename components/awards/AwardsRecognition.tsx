import SectionSubHeader from "@/components/common/SectionSubHeader";
import SectionHeader from "../common/SectionHeader";
import { awardsData } from "@/services/data";
import { awardsBgDown, awardsBgUp } from "@/services/assets/images";
import Image from "next/image";
import { images } from "@/services";

const AwardsRecognition = () => {
  return (
    <section className="relative bg-[#FBE266] w-full pb-10 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20 overflow-hidden">
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

        <div className="containerX mt-8 md:mt-16 lg:mt-20 w-full">
          <div className="max-w-full flex justify-center items-center overflow-x-auto scrollbar-hide gap-8 md:gap-16">
            <Image src={images.topClutch} alt="award" width={590} height={694} className="max-w-[270px] md:mr-9" />
            <Image src={images.raterGreat} alt="award" width={590} height={694} className="max-w-[300px] hidden md:block" />
            <Image src={images.globalAward} alt="award" width={692} height={680} className="max-w-[400px] hidden xl:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
