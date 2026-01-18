import { images } from "@/services";
import Image from "next/image";
import ExpandableButtonList from "./partials/ExpandableButtonList";

function HeroHome() {
  return (
    <section className="relative pt-52 pb-10">
      <div className="containerX max-w-[964px] relative z-50 text-center">
        <p className="para text-white">Your Trusted Tech Company</p>
        <h1 className="titleGradient text-5xl md:text-6xl lg:text-8xl font-scoutcond font-black uppercase leading-[80%] my-1">
          Idea to{" "}
          <span className="italic font-bold mr-2">development, Deploy </span> to
          Succeed!
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-text-200 max-w-md mx-auto">
          From concept to development, we engineer digital experiences that
          drive business growth.​
        </p>
        <ExpandableButtonList className="hidden md:flex mt-10" />
        <div className="w-full max-w-[874px] mx-auto flex items-center h-[92px] border border-text-rgb44 bg-white/30 mt-[152px]">
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={images.ratingClutch}
              alt="Clutch Badge"
              title="Clutch Badge"
              className="w-full object-contain"
              width={250}
              height={250}
            />
          </a>
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={images.ratingClutch}
              alt="Clutch Badge"
              title="Clutch Badge"
              className="w-full object-contain"
              width={250}
              height={250}
            />
          </a>
          <a
            href="https://clutch.co/profile/netro-systems"
            className="flex-1 shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={images.ratingClutch}
              alt="Clutch Badge"
              title="Clutch Badge"
              className="w-full object-contain"
              width={250}
              height={250}
            />
          </a>
        </div>
      </div>
      {/* hero banner image  */}
      <Image
        src={images.banner}
        className="absolute bottom-0 left-0 w-full h-auto object-fill"
        alt="Hero Banner"
        title="Hero banner"
      />
    </section>
  );
}

export default HeroHome;
