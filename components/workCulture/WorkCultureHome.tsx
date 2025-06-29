"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import { Button } from "@/components/ui/button";
import colors from "@/lib/colors";
import { images } from "@/services";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorkCultureHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const paragraphEl = paragraphRef.current;
    if (!paragraphEl) return;

    const text = paragraphEl.textContent || "";
    const words = text.split(" ");
    paragraphEl.innerHTML = "";

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block mr-[0.25em]";

      [...word].forEach((letter) => {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = letter;
        letterSpan.className = "inline-block opacity-0";
        wordSpan.appendChild(letterSpan);
      });

      paragraphEl.appendChild(wordSpan);
    });

    const allLetters = paragraphEl.querySelectorAll("span span");

    gsap.fromTo(
      allLetters,
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: {
          amount: 2,
          each: 0.02,
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // scroll for 1x viewport height
          scrub: 1.2,
          pin: true,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="containerX w-full pt-10 md:pt-20 lg:pt-[160px] pb-20 lg:pb-[160px] relative"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left portion */}
        <div className="flex flex-col w-full md:w-[45%]">
          <SectionSubHeader text="Work Culture" className="w-fit" />

          <p
            ref={paragraphRef}
            className="text-2xl md:text-[40px] font-bold !leading-[1.2] mt-6 md:mt-10"
          >
            Netro Systems fosters innovation collaboration, diversity, and
            growth, creating impactful software solutions in a vibrant,
            inclusive culture.
          </p>

          <div className="mt-10 flex items-center gap-2 md:gap-4">
            <Button className="w-fit group">
              <span className="!leading-none">Join our team</span>
              <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
            </Button>
            <ArrowLineupButton lineColor={colors.main[400]} className="">
              Know more about us
            </ArrowLineupButton>
          </div>
        </div>

        {/* Right portion */}
        <div className=" w-full md:w-[55%] relative overflow-hidden">
          <Image
            src={images.officeImage1}
            className="min-h-full min-w-full absolute_center"
            alt="office image 1"
            height={1920}
            width={1920}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCultureHome;
