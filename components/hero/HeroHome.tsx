"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import colors from "@/lib/colors";
import { images } from "@/services";
import { StarIcon, StarShadowIcon } from "@/services/assets/svgs";
import { bannerIcons } from "@/services/data";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Avatar } from "../ui/avatar";
import ExpandableButtonList from "./partials/ExpandableButtonList";

function HeroHome() {
  const { avatarRef, titleRef, descriptionRef } = useHeroAnimation();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      data-bg-theme="dark"
      className="relative  pt-52 pb-10 sm:min-h-dvh flex_center overflow-hidden"
      style={{
        background:
          "linear-gradient(9deg, #e6f2fe 0%, #8fb6fd 8%, #88b0fb 10%, #5a89f4 20%, #143bda 30%, #1e3a8a 35%, #03011b 45%, #02001a 80%, #03011b 100%)",
      }}
    >
      <div className="containerX max-w-[964px] relative z-[99] text-center">
        <h1
          ref={titleRef}
          className="mb-4 sm:my-1 text-[2.75rem] xs:text-5xl md:text-6xl lg:text-8xl font-scoutcond font-black uppercase !leading-[80%]"
        >
          <div
            className="titleGradient title-line"
            style={{ transformStyle: "preserve-3d" }}
          >
            AI <span className="md:italic md:font-bold">Inspired</span>{" "}
            <span className="md:hidden">Idea</span>
          </div>
          <div
            className="titleGradient title-line flex justify-center items-end flex-wrap"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="hidden md:inline mr-1.5">Idea </span> to{" "}
            <Avatar
              ref={avatarRef}
              className="size-11 lg:size-16 rounded-none -mx-1 md:-mr-3 relative overflow-hidden"
            >
              {bannerIcons.map((item) => (
                <Image
                  key={item.id}
                  src={item.icon.src as unknown as string}
                  alt="tech icon"
                  className="hero-avatar absolute inset-0 object-contain opacity-0"
                  fill
                />
              ))}
            </Avatar>{" "}
            <span className="md:italic md:font-bold">development,</span>
          </div>{" "}
          <span
            className="titleGradient title-line inline-block"
            style={{ transformStyle: "preserve-3d" }}
          >
            Deploy to Succeed!
          </span>
        </h1>

        <p
          ref={descriptionRef}
          className="text-sm md:text-base lg:text-lg text-text-200 max-w-md mx-auto"
        >
          From concept to development, we engineer digital experiences that
          drive business growth.​
        </p>

        <ExpandableButtonList />
        <div className="w-full max-w-[874px] mx-auto flex items-center h-24 xs:h-28 sm:h-16 md:h-[92px] border border-text-rgb44 bg-white/30 mt-20 md:mt-28 lg:mt-[152px] text-left font-inter rounded-xl md:rounded-2xl">
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
      {/* hero banner image - placeholder until video loads */}
      {mounted && (
        <Image
          src={images.banner}
          className={`absolute bottom-0 left-0 w-full h-full object-fill transition-opacity duration-500 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
          alt="Hero Banner"
          title="Hero banner"
          suppressHydrationWarning
          priority
        />
      )}
      {/* hero background video */}
      {mounted && (
        <video
          ref={videoRef}
          className="absolute bottom-0 left-0 w-full h-full object-fill"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onEnded={() => {
            // Ensure seamless looping by immediately replaying
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          }}
          suppressHydrationWarning
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      )}
    </section>
  );
}

export default HeroHome;
