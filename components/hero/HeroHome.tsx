import colors from "@/lib/colors";
import { images } from "@/services";
import { StarIcon, StarShadowIcon } from "@/services/assets/svgs";
import Image from "next/image";
import ExpandableButtonList from "./partials/ExpandableButtonList";

function HeroHome() {
  return (
    <section
      data-bg-theme="dark"
      className="relative pt-52 pb-10 sm:min-h-dvh flex_center overflow-hidden"
    >
      <div className="containerX max-w-[964px] relative z-[99] text-center">
        <p className="para text-white hidden sm:block">
          Your Trusted Tech Company
        </p>
        <h1 className="titleGradient text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-scoutcond font-black uppercase leading-[80%] mb-4 sm:my-1">
          Idea to{" "}
          <span className="italic font-bold mr-2">
            development,
            <br /> Deploy{" "}
          </span>{" "}
          to Succeed!
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-text-200 max-w-md mx-auto">
          From concept to development, we engineer digital experiences that
          drive business growth.​
        </p>
        <ExpandableButtonList />
        <div className="w-full max-w-[874px] mx-auto flex items-center h-24 xs:h-28 sm:h-16 md:h-[92px] border border-text-rgb44 bg-white/30 mt-20 md:mt-28 lg:mt-[152px] text-left font-inter">
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0 inline-flex flex-col sm:flex-row sm:items-center p-3 md:p-6 gap-2 sm:gap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <p className="uppercase text-[0.375rem] xs:text-[0.64rem] leading-[normal] text-white">
                REVIEWED ON
              </p>
              <Image
                src={images.ratingClutch}
                alt="Clutch Badge"
                title="Clutch Badge"
                className="w-full max-w-14 xs:max-w-20 sm:max-w-[209px] h-6 object-contain mt-0.5 sm:mt-2"
                width={250}
                height={250}
              />
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <StarIcon className="size-2.5 xs:size-4" key={item} />
                ))}
              </div>
              <p className="text-xs leading-normal  text-white mt-0.5 xs:mt-1">
                4.5
              </p>
            </div>
          </a>
          <div className="h-full w-px gradientBorder"></div>
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0 inline-flex flex-col sm:flex-row sm:items-center p-3 md:p-6 gap-2 sm:gap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <p className="uppercase text-[0.375rem] xs:text-[0.64rem] leading-[normal] text-white">
                REVIEWED ON
              </p>
              <Image
                src={images.ratingTrustpilot}
                alt="Clutch Badge"
                title="Clutch Badge"
                className="w-full max-w-16 xs:max-w-20 sm:max-w-[209px] h-5 object-contain mt-0.5 sm:mt-2"
                width={250}
                height={250}
              />
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <StarShadowIcon className="size-2.5 xs:size-4" key={item} />
                ))}
              </div>
              <p className="text-xs leading-normal  text-white mt-0.5 xs:mt-1">
                5.0
              </p>
            </div>
          </a>
          <div className="h-full w-px gradientBorder"></div>
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0 inline-flex flex-col sm:flex-row sm:items-center p-3 md:p-6 gap-2 sm:gap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <p className="uppercase text-[0.375rem] xs:text-[0.64rem] leading-[normal] text-white">
                REVIEWED ON
              </p>
              <Image
                src={images.ratingGoodFirms}
                alt="Clutch Badge"
                title="Clutch Badge"
                className="w-full max-w-16 xs:max-w-20 sm:max-w-[209px] h-5 object-contain mt-0.5 sm:mt-2"
                width={250}
                height={250}
              />
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <StarIcon
                    color={colors.secondary[950]}
                    className="size-2.5 xs:size-4"
                    key={item}
                  />
                ))}
              </div>
              <p className="text-xs leading-normal  text-white mt-0.5 xs:mt-1">
                5.0
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* banner icons  */}
      <Image
        src={images.bannerIcon1}
        className="hidden lg:block w-10 lg:w-12 h-auto object-contain absolute top-36 left-9 z-50"
        alt="banner icon one"
      />
      <Image
        src={images.bannerIcon2}
        className="hidden lg:block w-16 lg:w-24 h-auto object-contain absolute top-64 left-24 lg:left-32 xl:left-52 z-50"
        alt="banner icon one"
      />
      <Image
        src={images.bannerIcon3}
        className="hidden lg:block w-14 lg:w-20 h-auto object-contain absolute bottom-32 lg:bottom-64 left-14 lg:left-20 xl:left-32 z-50"
        alt="banner icon one"
      />
      <Image
        src={images.bannerIcon4}
        className="hidden lg:block w-12 lg:w-16 h-auto object-contain absolute top-28 right-56 xl:right-96 z-50"
        alt="banner icon one"
      />
      <Image
        src={images.bannerIcon5}
        className="hidden lg:block w-16 lg:w-20 h-auto object-contain absolute top-64 right-20 lg:right-32 xl:right-52 z-50"
        alt="banner icon one"
      />
      <Image
        src={images.bannerIcon6}
        className="hidden lg:block w-20 lg:w-28 h-auto object-contain absolute bottom-28 lg:bottom-20 right-16 xl:right-32 z-50"
        alt="banner icon one"
      />
      {/* banner icons  */}
      {/* hero banner image  */}
      <Image
        src={images.banner}
        className="absolute bottom-0 left-0 w-full h-full object-fill"
        alt="Hero Banner"
        title="Hero banner"
      />
    </section>
  );
}

export default HeroHome;
