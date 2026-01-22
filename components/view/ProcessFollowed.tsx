"use client";

import { cn } from "@/lib/utils";
import {
  CodeIcon,
  GlobeSearch,
  LightIcon,
  PainIcon,
} from "@/services/assets/svgs";
import { processData } from "@/services/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  research: <GlobeSearch className="process-icon size-7 sm:size-8" />,
  architecture: <LightIcon className="process-icon size-8" />,
  design: <PainIcon className="process-icon size-7 sm:size-8" />,
  development: <CodeIcon className="process-icon size-7 sm:size-8" />,
};

function ProcessFollowed() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  /* ---------- SCROLL REVEAL ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-sub, .process-title",
        { autoAlpha: 0, y: 24, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".process-card",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------- IMAGE CHANGE ANIMATION ---------- */
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, y: 16 },
      {
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  }, [activeIndex]);

  /* ---------- HOVER ANIMATION ---------- */
  const handleHover = (index: number, el: HTMLDivElement) => {
    setActiveIndex(index);

    gsap.to(el, {
      y: -6,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(el.querySelector(".process-icon"), {
      scale: 1.15,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  };

  const handleLeave = (el: HTMLDivElement) => {
    gsap.to(el, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(el.querySelector(".process-icon"), {
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      data-bg-theme="light"
      className="bg-green-500 pb-10 pt-10 md:pt-16 lg:pt-20"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader text="How we make" className="process-sub" />
        <SectionHeader className="process-title mt-5 text-black">
          Process followed
        </SectionHeader>

        <div className="w-full relative mt-6 sm:mt-10 md:mt-16">
          <div className="process-grid grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-8 mb-12">
            {processData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={(e) => handleHover(index, e.currentTarget)}
                  onMouseLeave={(e) => handleLeave(e.currentTarget)}
                  className={cn(
                    "process-card py-5 px-3 md:p-3 border-b w-full relative cursor-pointer",
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-[3px] after:w-full after:origin-left after:transition-transform after:duration-700",
                    isActive
                      ? "bg-white border-[#74E49F] after:bg-[#3654FF] after:scale-x-100"
                      : "border-[#74E49F] after:bg-[#3654FF] after:scale-x-0",
                  )}
                >
                  {icons[item.icon as keyof typeof icons]}

                  <div className="flex flex-col mt-4 md:mt-6">
                    <h3 className="text-lg md:text-xl lg:text-2xl text-black leading-[140%] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-[120%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div ref={imageRef}>
            <Image
              src={processData[activeIndex].image}
              alt="process active image"
              width={1200}
              height={800}
              className="w-full h-auto will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessFollowed;
