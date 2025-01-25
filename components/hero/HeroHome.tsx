"use client";
import { bonbon, inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { CallMissedIcon } from "@/services/assets/svgs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { heroHomeSocialsData } from "@/services/data";

const HeroHome = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const target = textRef.current;

    // Set initial position
    gsap.set(target, {
      y: -100,
      opacity: 0,
      scale: 1,
    });

    const tl = gsap.timeline({
      delay: 0.3, // 300ms delay
    });

    tl
      // Initial drop with impact
      .to(target, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.in",
      })
      // Squash on impact
      .to(
        target,
        {
          scaleX: 1.4,
          scaleY: 0.6,
          duration: 0.08,
          ease: "power1.out",
        },
        "-=0.08"
      )
      // First bounce up
      .to(target, {
        y: -40,
        scaleX: 1,
        scaleY: 1,
        duration: 0.25,
        ease: "power2.out",
      })
      // Small final bounce and settle
      .to(target, {
        y: 0,
        duration: 0.2,
        ease: "power2.in",
      })
      .to(
        target,
        {
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 0.1,
          ease: "power1.out",
        },
        "-=0.1"
      )
      // Return to original shape
      .to(target, {
        scale: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section className="flex flex-row bg-black min-h-[1120px] relative overflow-hidden">
      <Image
        alt="hero star glass image"
        src={images.starGlass}
        className="absolute z-[1] left-0 top-0 h-[1080px] w-[1080px] aspect-square shrink-0 rotate-[-113deg]"
        height={1120}
        width={1120}
      />
      <div className="w-[36%]" />

      <div className="w-[64%] bg-black px-20 py-[118px] relative z-[2]">
        {/* TITLES */}
        <div
          className={cn(
            scoutCond.className,
            "hero-text-gradient text-[96px] uppercase font-bold !leading-[0.8]"
          )}
        >
          <div>DESIGN</div>
          <p className="">
            <span>DEVEL</span>
            <span
              ref={textRef}
              className={cn(
                "text-[96px] inline-block font-normal hero-text-o-gradient",
                bonbon.className
              )}
            >
              O
            </span>
            <span>PMENT</span>
          </p>
          <div>DEPLOY</div>
        </div>

        <p
          className={cn(
            inter.className,
            "text-xl font-normal !leading-[1.8] text-white mt-6"
          )}
        >
          Empowering brands with user-focused designs and <br /> seamless
          development.
        </p>

        {/* CONNECT & SOCIALS */}
        <div className="flex flex-row gap-6 mt-8 md:mt-[60px]">
          <GradientButton>
            <span className="text-white">Schedule a call</span>
            <CallMissedIcon className="!h-6 !w-6 !shrink-0" />
          </GradientButton>

          <div className="flex flex-row items-center gap-3">
            {heroHomeSocialsData.map(({ link, icon }, index) => (
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

        <div className="flex flex-row items-center mt-10 md:mt-20 gap-6 relative">
          <Image
            src={images.ratingClutch}
            alt="clutch rating"
            className="h-9 w-auto"
            height={100}
            width={400}
          />
          <div className="h-[46px] border-[1px] border-[#353535] border-dashed" />
          <Image
            src={images.ratingTrustpilot}
            alt="trustpilot rating"
            className="h-9 w-auto"
            height={100}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
