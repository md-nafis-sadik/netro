"use client";

import colors from "@/lib/colors";
import { images } from "@/services";
import { StarIcon, StarShadowIcon } from "@/services/assets/svgs";
import { bannerIcons } from "@/services/data";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Avatar } from "../ui/avatar";
import ExpandableButtonList from "./partials/ExpandableButtonList";

function HeroHome() {
  const avatarRef = useRef<HTMLDivElement | null>(null);

  /* ---------- AVATAR AUTO CYCLE ---------- */
  useEffect(() => {
    if (!avatarRef.current) return;

    const avatars = avatarRef.current.querySelectorAll(".hero-avatar");

    const tl = gsap.timeline({ repeat: -1 });

    avatars.forEach((avatar, i) => {
      tl.fromTo(
        avatar,
        { autoAlpha: 0, scale: 0.7, rotate: -15, y: 10 },
        {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
        },
      ).to(
        avatar,
        {
          autoAlpha: 0,
          scale: 0.7,
          rotate: 15,
          y: -10,
          duration: 0.8,
          ease: "power3.in",
        },
        "+=2",
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      data-bg-theme="dark"
      className="relative pt-52 pb-10 sm:min-h-dvh flex_center overflow-hidden"
    >
      <div className="containerX max-w-[964px] relative z-[99] text-center">
        <h1 className="titleGradient text-4xl xs:text-5xl md:text-6xl lg:text-8xl font-scoutcond font-black uppercase !leading-[80%] mb-4 sm:my-1">
          AI <span className="italic font-bold">Inspired</span> <br />
          <div className="inline-flex items-end">
            Idea to{" "}
            <Avatar
              ref={avatarRef}
              className="size-8 md:size-10 lg:size-16 rounded-none -mr-1 md:-mr-3 relative overflow-hidden"
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
            <span className="italic font-bold">development,</span>
          </div>{" "}
          <br />
          Deploy to Succeed!
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
