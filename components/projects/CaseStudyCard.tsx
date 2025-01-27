import { images } from "@/services";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowTopRIghtIcon } from "@/services/assets/svgs";
import colors from "@/lib/colors";

const CaseStudyCard = () => {
  return (
    <div className="flex flex-col min-w-[280px] md:min-w-[522px]">
      <div className="h-[200px] md:h-[348px] relative overflow-hidden">
        <Image
          src={images.projectBannerTelzen}
          alt="topic image 1"
          className="absolute_center min-h-full min-w-full"
          height={1280}
          width={1920}
        />
      </div>

      <div className="font-inter flex flex-col gap-4 md:gap-6 px-4 md:px-10 py-6 md:py-10 bg-gradient-to-t from-[#002F25] to-[#00000000]">
        <Image
          src={images.telzenIcon}
          alt="topic image 1"
          className="w-[86px] md:w-[142px]"
        />

        <p className="text-sm md:text-lg font-normal !leading-[1.4] text-text-200">
          Empowering brands with user-focused designs and seamless development.
        </p>

        <p className="text-xs md:text-lg font-normal !leading-[1.4] text-white">
          Case Study, Mobile App, Telco, Design, Development
        </p>

        <Button className="gap-2 bg-white w-fit group">
          <span className="text-xs md:text-base font-bold !leading-[1.4] text-text-900 group-hover:text-white-100">
            View Case
          </span>
          <ArrowTopRIghtIcon
            className="h-4 w-4 md:h-6 md:w-6"
            color={colors.text[900]}
          />
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
