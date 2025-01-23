import SectionSubHeader from "@/components/shared/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import { Button } from "@/components/ui/button";
import colors from "@/lib/colors";
import { images } from "@/services";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";

const WorkCulture = () => {
  return (
    <section className="containerX w-full pt-10 md:pt-20 lg:pt-[160px] pb-20 lg:pb-[160px] relative">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left portion */}
        <div className="flex flex-col w-full md:w-[45%]">
          <SectionSubHeader text="Work Culture" className="w-fit" />

          <p className="text-2xl md:text-[40px] font-bold !leading-[1.2] mt-6 md:mt-10">
            Netro Systems fosters innovation collaboration, diversity, and
            growth, creating impactful software solutions in a vibrant,
            inclusive culture.
          </p>

          <div className="mt-10 flex items-center gap-2 md:gap-4">
            <Button className="w-fit group">
              <span className="!leading-none">Join our team</span>
              <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
            </Button>
            <ArrowLineupButton
              lineColor={colors.main[400]}
              className="mt-10 md:mt-0"
            >
              Know more about us
            </ArrowLineupButton>
          </div>
        </div>

        {/* Right portion */}
        <div className=" w-full md:w-[55%] relative overflow-hidden">
          <Image
            src={images.officeImage1}
            className="min-h-full min-w-full absolute_center"
            alt="office image 1"
            height={1920}
            width={1920}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
