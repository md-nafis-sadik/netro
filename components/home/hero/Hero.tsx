"use client";
import { heroHomeSocialsData } from "@/lib/data";
import { bonbon, inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const target = textRef.current;

    // Create a GSAP timeline for the animation
    const tl = gsap.timeline();

    tl.fromTo(
      target,
      { scale: 0, opacity: 0 }, // Start with no scale and opacity
      {
        scale: 1.5, // Scale up larger than the original
        opacity: 1, // Fade in
        duration: 0.4,
        ease: "power2.out",
      }
    )
      .to(target, {
        scale: 0.8, // Bounce down smaller than the original
        duration: 0.4,
        ease: "power2.out(1, 0.5)",
      })
      .to(target, {
        scale: 1, // Settle into original size
        duration: 0.6,
        ease: "power2.out(1, 0.5)",
      });
  }, []);

  return (
    <section className="flex flex-row bg-black min-h-[1120px] relative">
      <Image
        alt="hero star glass image"
        src={images.StarGlass}
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
          <div className="flex flex-row items-center gap-3">
            {heroHomeSocialsData.map(({ link, icon }, index) => (
              <a
                className="h-12 w-12 rounded-full bg-natural-900 flex_center"
                href={link}
                key={index}
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center mt-10 md:mt-20 gap-6">
          <Image
            src={images.RatingClutch}
            alt="clutch rating"
            className="h-9 w-auto"
            height={100}
            width={400}
          />
          <div className="h-[46px] border-[1px] border-[#353535] border-dashed" />
          <Image
            src={images.RatingTrustpilot}
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

export default Hero;
