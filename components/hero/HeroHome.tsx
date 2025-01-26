import { cn } from "@/lib/utils";
import { images } from "@/services";
import { CallMissedIcon } from "@/services/assets/svgs";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { socialsData } from "@/services/data/shared.data";
import BallBounceText from "../animations/BallBounceText";

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
            "hero-text-gradient text-[66px] lg:text-[96px] uppercase font-bold !leading-[0.8] font-scout-cond text-center lg:text-start"
          )}
        >
          <div>DESIGN</div>
          <p className="">
            <span>DEVEL</span>
            <BallBounceText
              className={cn(
                "text-[66px] lg:text-[96px] inline-block font-normal hero-text-o-gradient font-bonbon"
              )}
            >
              O
            </BallBounceText>
            <span>PMENT</span>
          </p>
          <div>DEPLOY</div>
        </div>

        <p
          className={cn(
            "text-sm md:text-xl font-normal !leading-[1.8] text-white mt-6 font-inter text-center lg:text-start"
          )}
        >
          Empowering brands with user-focused designs and <br /> seamless
          development.
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
