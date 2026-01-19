import { images } from "@/services";
import Image from "next/image";
import ExpandableButtonList from "./partials/ExpandableButtonList";

function HeroHome() {
  return (
    
    <section data-bg-theme="dark" className="relative pt-40 lg:pt-52 pb-10 lg:min-h-[835px] flex_center overflow-hidden">
      <div className="containerX max-w-[964px] relative z-[99] text-center">
        <p className="para text-white">Your Trusted Tech Company</p>
        <h1 className="titleGradient text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-scoutcond font-black uppercase leading-[80%] my-1">
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
        <ExpandableButtonList className="hidden md:flex mt-10" />
        <div className="w-full max-w-[874px] mx-auto flex items-center h-12 sm:h-16 md:h-[92px] border border-text-rgb44 bg-white/30 mt-20 md:mt-28 lg:mt-[152px]">
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0 inline-block p-3 sm:p-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={images.ratingClutch}
              alt="Clutch Badge"
              title="Clutch Badge"
              className="w-full max-w-[209px] h-10 object-contain"
              width={250}
              height={250}
            />
          </a>
          <div className="h-full w-px gradientBorder"></div>
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0 inline-block  p-3 sm:p-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={images.ratingTrustpilot}
              alt="Clutch Badge"
              title="Clutch Badge"
              className="w-full max-w-[209px] h-10 object-contain"
              width={250}
              height={250}
            />
          </a>
          <div className="h-full w-px gradientBorder"></div>
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0 inline-block p-3 sm:p-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={images.ratingGoodFirms}
              alt="Clutch Badge"
              title="Clutch Badge"
              className="w-full max-w-[209px] h-10 object-contain"
              width={250}
              height={250}
            />
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
