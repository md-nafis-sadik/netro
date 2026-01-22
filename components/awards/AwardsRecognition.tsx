"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import SectionHeader from "../common/SectionHeader";
import { awardsData } from "@/services/data";
import { awardsBgDown, awardsBgUp } from "@/services/assets/images";
import Image from "next/image";
import { images } from "@/services";

gsap.registerPlugin(ScrollTrigger);

const AwardsRecognition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const subHeaderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const award1Ref = useRef<HTMLDivElement>(null);
  const award2Ref = useRef<HTMLDivElement>(null);
  const award3Ref = useRef<HTMLDivElement>(null);
  const bgTopRef = useRef<HTMLDivElement>(null);
  const bgBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background patterns animation
      gsap.from(bgTopRef.current, {
        x: 100,
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(bgBottomRef.current, {
        x: -100,
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Main content timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(subHeaderRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
      })
      .from(headerRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      }, "-=0.3")
      .from(award1Ref.current, {
        y: 80,
        opacity: 0,
        rotation: -15,
        duration: 0.8,
        ease: "back.out(1.5)",
      }, "-=0.4")
      .from(award2Ref.current, {
        y: 80,
        opacity: 0,
        rotation: 15,
        duration: 0.8,
        ease: "back.out(1.5)",
      }, "-=0.6")
      .from(award3Ref.current, {
        y: 80,
        opacity: 0,
        rotation: -15,
        duration: 0.8,
        ease: "back.out(1.5)",
      }, "-=0.6");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FBE266] w-full pb-10 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20 overflow-hidden"
    >
      {/* Background Pattern - Top Right */}
      <div
        ref={bgTopRef}
        className="absolute top-0 right-0 w-1/3 md:w-1/4 opacity-30 pointer-events-none"
      >
        <Image
          src={awardsBgUp}
          alt="Awards background pattern"
          className="w-full h-auto"
        />
      </div>

      {/* Background Pattern - Bottom Left */}
      <div
        ref={bgBottomRef}
        className="absolute bottom-0 left-0 w-1/3 md:w-1/4 opacity-30 pointer-events-none"
      >
        <Image
          src={awardsBgDown}
          alt="Awards background pattern"
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 flex_center flex-col w-full">
        <div ref={subHeaderRef}>
          <SectionSubHeader
            text="SERVICES"
            className="bg-white text-black border-none"
          />
        </div>

        <div ref={headerRef}>
          <SectionHeader className="home_journal_header_v2 text-5xl md:text-[96px] mt-5">
            Awards & Recognition
          </SectionHeader>
        </div>

        <div className="containerX mt-8 md:mt-16 lg:mt-20 w-full">
          <div className="max-w-full flex justify-center items-center overflow-x-auto scrollbar-hide gap-8 md:gap-16">
            <div ref={award1Ref}>
              <Image
                src={images.topClutch}
                alt="award"
                width={590}
                height={694}
                className="max-w-[270px] md:mr-9"
              />
            </div>
            <div ref={award2Ref}>
              <Image
                src={images.raterGreat}
                alt="award"
                width={590}
                height={694}
                className="max-w-[300px] hidden md:block"
              />
            </div>
            <div ref={award3Ref}>
              <Image
                src={images.globalAward}
                alt="award"
                width={692}
                height={680}
                className="max-w-[400px] hidden xl:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;