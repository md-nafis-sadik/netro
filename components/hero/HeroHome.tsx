import { cn } from "@/lib/utils";
import { images } from "@/services";
import { CallMissedIcon } from "@/services/assets/svgs";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { socialsData } from "@/services/data/shared.data";
import ZRotationText from "../animations/ZRotationText";

const HeroHome = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row bg-black lg:min-h-[860px] relative">
      <Image
        src={images.heroTopGradient}
        alt="hero section top gradient"
        className="absolute_center top-0 max-w-[1024px] z-[2]"
        height={650}
        width={1060}
      />

      <div className="w-full lg:w-1/2 min-h-full relative bg-transparent">
        <Image
          src={images.netroHeroCrystal}
          alt="netro hero crystal image"
          className="absolute_center lg:!right-auto object-cover max-h-[700px] max-w-[734px]"
          height={1400}
          width={1920}
        />
      </div>

      <div className="w-full lg:w-1/2 pb-10 pt-[60px] lg:py-[118px] relative z-[2]">
        {/* TITLES */}
        <div
          className={cn(
            "hero-text-gradient text-[66px] md:text-[96px] lg:text-[128px] uppercase font-bold !leading-[0.8] font-scoutcond !text-center lg:text-start"
          )}
        >
          <div className="flex items-center justify-center lg:justify-start w-full">
            <ZRotationText
              text="D"
              delay={0.5}
              gradientTextClass="home_hero_design_d"
            />
            <ZRotationText
              text="E"
              delay={0.52}
              gradientTextClass="home_hero_design_e"
            />
            <ZRotationText
              text="S"
              delay={0.54}
              gradientTextClass="home_hero_design_s"
            />
            <ZRotationText
              text="I"
              delay={0.56}
              gradientTextClass="home_hero_design_i"
            />
            <ZRotationText
              text="G"
              delay={0.58}
              gradientTextClass="home_hero_design_g"
            />
            <ZRotationText
              text="N"
              delay={0.6}
              gradientTextClass="home_hero_design_n"
            />
          </div>
          <div className="flex flex-row items-end w-full">
            <div className="flex items-center justify-center lg:justify-start w-full">
              <ZRotationText
                text="D"
                delay={0.75}
                gradientTextClass="home_hero_development_d"
              />
              <ZRotationText
                text="E"
                delay={0.77}
                gradientTextClass="home_hero_development_e1"
              />
              <ZRotationText
                text="V"
                delay={0.79}
                gradientTextClass="home_hero_development_v"
              />
              <ZRotationText
                text="E"
                delay={0.81}
                gradientTextClass="home_hero_development_e2"
              />
              <ZRotationText
                text="L"
                delay={0.83}
                gradientTextClass="home_hero_development_l"
              />
              {/* <BallBounceText
                className={cn(
                  "text-[66px] md:text-[86px] lg:text-[116px] inline-block font-normal font-bonbon !leading-[0.8] mt-4 home_hero_development_o"
                )}
                delay={1.0}
              >
                O
              </BallBounceText> */}
              <ZRotationText
                text="O"
                delay={1.0}
                gradientTextClass="home_hero_development_p"
              />
              <ZRotationText
                text="P"
                delay={1.25}
                gradientTextClass="home_hero_development_p"
              />
              <ZRotationText
                text="M"
                delay={1.27}
                gradientTextClass="home_hero_development_m"
              />
              <ZRotationText
                text="E"
                delay={1.29}
                gradientTextClass="home_hero_development_e3"
              />
              <ZRotationText
                text="N"
                delay={1.31}
                gradientTextClass="home_hero_development_n"
              />
              <ZRotationText
                text="T"
                delay={1.33}
                gradientTextClass="home_hero_development_t"
              />
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start w-full">
            <ZRotationText
              text="D"
              delay={1.5}
              gradientTextClass="home_hero_deploy_d"
            />
            <ZRotationText
              text="E"
              delay={1.52}
              gradientTextClass="home_hero_deploy_e"
            />
            <ZRotationText
              text="P"
              delay={1.54}
              gradientTextClass="home_hero_deploy_p"
            />
            <ZRotationText
              text="L"
              delay={1.56}
              gradientTextClass="home_hero_deploy_l"
            />
            <ZRotationText
              text="O"
              delay={1.58}
              gradientTextClass="home_hero_deploy_o"
            />
            <ZRotationText
              text="Y"
              delay={1.6}
              gradientTextClass="home_hero_deploy_y"
            />
            <ZRotationText
              text="."
              delay={1.62}
              gradientTextClass="home_hero_deploy_dot"
            />
          </div>
        </div>

        <p
          className={cn(
            "text-sm md:text-xl font-normal !leading-[1.8] text-text-200 mt-1 font-inter text-center lg:text-start max-w-[562px] mx-auto lg:mx-0"
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

        <div className="flex flex-row items-center justify-center lg:justify-start mt-10 gap-6 relative">
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
          <div className="h-[46px] border-[1px] border-[#353535] border-dashed" />
          <Image
            src={images.ratingGoodFirms}
            alt="goodfirms rating"
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
