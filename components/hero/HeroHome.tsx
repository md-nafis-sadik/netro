import { cn } from "@/lib/utils";
import { images } from "@/services";
import { CallMissedIcon } from "@/services/assets/svgs";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { socialsData } from "@/services/data/shared.data";
import BallBounceText from "../animations/BallBounceText";
import ZRotationText from "../animations/ZRotationText";

const HeroHome = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row bg-black lg:min-h-[1120px] relative overflow-hidden">
      <Image
        alt="hero star glass image"
        src={images.starGlass}
        className="absolute z-[1] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-14 bottom-8 lg:top-0 h-[410px] lg:h-[1080px] w-[410px] lg:w-[1080px] aspect-square !shrink-0 rotate-[14.8deg] lg:rotate-[-113deg]"
        height={1120}
        width={1120}
      />
      {/* GAP BALANCER */}
      <div className="h-[300px] lg:h-auto lg:w-[36%]" />

      <div className="w-full lg:w-[64%] bg-black px-4 md:px-20 pb-10 pt-[60px] lg:py-[118px] relative z-[2]">
        {/* TITLES */}
        <div
          className={cn(
            "hero-text-gradient text-[66px] md:text-[96px] lg:text-[128px] uppercase font-bold !leading-[0.8] font-scoutcond !text-center lg:text-start"
          )}
        >
          <div className="flex items-center justify-center lg:justify-start w-full">
            <ZRotationText text="DESIGN" delay={0.5} />
          </div>
          <div className="flex flex-row items-end w-full">
            <div className="flex items-center justify-center lg:justify-start w-full">
              <ZRotationText text="DEVEL" delay={0.75} />
              <BallBounceText
                className={cn(
                  "text-[66px] lg:text-[102px] inline-block font-normal hero-text-o-gradient font-bonbon !leading-[0.8] "
                )}
                delay={1.0}
              >
                O
              </BallBounceText>
              <ZRotationText text="PMENT" delay={1.25} />
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start w-full">
            <ZRotationText text="DEPLOY" delay={1.5} />
          </div>
        </div>

        <p
          className={cn(
            "text-sm md:text-xl font-normal !leading-[1.8] text-text-200 mt-6 font-inter text-center lg:text-start max-w-[562px] mx-auto lg:mx-0"
          )}
        >
          Empowering brands with user-focused designs and seamless development.
        </p>

        {/* CONNECT & SOCIALS */}
        <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-6 mt-8 md:mt-[60px]">
          <GradientButton containerClassName="!shrink-0">
            <span className="text-white">Schedule a call</span>
            <CallMissedIcon className="!h-6 !w-6 !shrink-0" />
          </GradientButton>

          <div className="flex flex-row items-center gap-3">
            {socialsData.map(({ link, icon }, index) => (
              <a
                className="h-12 w-12 rounded-full transition_common bg-natural-900 hover:bg-main-400 flex_center"
                href={link}
                key={index}
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center lg:justify-start mt-10 md:mt-20 gap-6 relative">
          <Image
            src={images.ratingClutch}
            alt="clutch rating"
            className="h-6 md:h-9 w-auto"
            height={100}
            width={400}
          />
          <div className="h-[46px] border-[1px] border-[#353535] border-dashed" />
          <Image
            src={images.ratingTrustpilot}
            alt="trustpilot rating"
            className="h-6 md:h-9 w-auto"
            height={100}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
