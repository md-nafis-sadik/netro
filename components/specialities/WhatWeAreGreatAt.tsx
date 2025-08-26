"use client";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatWeAreGreatAtData } from "@/services/data";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatWeAreGreatAt = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const triggersCreated = useRef(false);

  // Function to determine active category based on scroll position
  const updateActiveCategoryFromScroll = () => {
    const rightSection = rightSectionRef.current;
    if (!rightSection) return;

    const items = rightSection.querySelectorAll("[data-item]");
    const scrollPosition = window.scrollY;

    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i] as HTMLElement;
      const itemTop = item.offsetTop - window.innerHeight * 0.4;

      if (scrollPosition >= itemTop) {
        const [categoryIndex] = item.dataset.item?.split("-").map(Number) || [
          0,
        ];
        setActiveCategory(categoryIndex);
        break;
      }
    }
  };

  useEffect(() => {
    // Update active category on mount based on current scroll position
    updateActiveCategoryFromScroll();

    // Also update on scroll to handle refresh scenarios
    const handleScroll = () => {
      updateActiveCategoryFromScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const container = containerRef.current;
    const rightSection = rightSectionRef.current;

    if (!container || !rightSection || triggersCreated.current) return;
    triggersCreated.current = true;

    const ctx = gsap.context(() => {
      // Create scroll triggers for each item
      whatWeAreGreatAtData.categories.forEach((category, categoryIndex) => {
        const items = whatWeAreGreatAtData.item[categoryIndex];

        items.forEach((item, itemIndex) => {
          const rightItem = rightSection.querySelector(
            `[data-item="${categoryIndex}-${itemIndex}"]`
          );

          if (!rightItem) return;

          ScrollTrigger.create({
            trigger: rightItem,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => setActiveCategory(categoryIndex),
            onEnterBack: () => setActiveCategory(categoryIndex),
            onLeaveBack: () => {
              // When scrolling back past the first item of a category
              if (itemIndex === 0 && categoryIndex > 0) {
                setActiveCategory(categoryIndex - 1);
              }
            },
          });
        });
      });
    }, container);

    return () => {
      ctx.revert();
      triggersCreated.current = false;
    };
  }, []);

  return (
    <section className="py-10 md:py-[120px]">
      <div className="containerX" ref={containerRef}>
        <SectionHeader className="!text-black text-start">
          What We&apos;re Great At
        </SectionHeader>
      </div>

      <div className="containerX flex flex-col md:flex-row">
        {/* Left Section - Sticky */}
        <div className="flex w-full md:w-1/2 md:sticky top-0 md:h-screen flex-col pr-8 bg-white space-y-10 py-8 md:py-20">
          {whatWeAreGreatAtData.categories.map((category, index) => (
            <p
              key={category}
              className={`font-inter text-4xl transition-all duration-300 cursor-pointer hover:text-black leading-[1.1] ${
                activeCategory === index
                  ? "font-bold text-black"
                  : "font-normal text-text-600"
              }`}
            >
              {category}
            </p>
          ))}
        </div>

        {/* Right Section - Scrollable */}
        <div ref={rightSectionRef} className="block w-full md:w-1/2 bg-white">
          <div className="py-6 md:py-20 px-4 md:px-16">
            {whatWeAreGreatAtData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {whatWeAreGreatAtData.item[categoryIndex].map(
                  (item, itemIndex) => (
                    <div
                      key={`${categoryIndex}-${itemIndex}`}
                      data-item={`${categoryIndex}-${itemIndex}`}
                    >
                      <div className="flex items-start mb-6">
                        <span className="text-2xl font-bold text-text-200 !leading-[1.4] mr-12">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-inter text-2xl font-normal text-black leading-[1.4]">
                          {item}
                        </h2>
                      </div>

                      <div
                        className="w-full h-px mb-8"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(to right, currentColor 0 5px, transparent 5px 10px)",
                          backgroundRepeat: "repeat-x",
                          color: "#EDEDED",
                          maskImage:
                            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                          WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            ))}
            <div className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreGreatAt;
