"use client";
import { useRef } from "react";
import SectionHeader from "../common/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatWeAreGreatAtData } from "@/services/data";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatWeAreGreatAt = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    if (!container || !leftSection || !rightSection) return;

    // Create ScrollTrigger context
    const ctx = gsap.context(() => {
      let totalItems = 0;
      let itemStartIndices: number[] = [];

      // Calculate start indices for each category
      whatWeAreGreatAtData.categories.forEach((_, categoryIndex) => {
        itemStartIndices.push(totalItems);
        totalItems += whatWeAreGreatAtData.item[categoryIndex].length;
      });

      // Create scroll triggers for each item
      let currentItemIndex = 0;

      whatWeAreGreatAtData.categories.forEach((category, categoryIndex) => {
        const items = whatWeAreGreatAtData.item[categoryIndex];

        items.forEach((item, itemIndex) => {
          const rightItem = rightSection.querySelector(
            `[data-item="${categoryIndex}-${itemIndex}"]`
          );
          const leftCategory = leftSection.querySelector(
            `[data-category="${categoryIndex}"]`
          );

          if (!rightItem || !leftCategory) return;

          ScrollTrigger.create({
            trigger: rightItem,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => {
              // Update left category styling
              gsap.set(leftCategory, {
                fontWeight: "bold",
                color: "#000000",
                duration: 0.3,
                ease: "power2.out",
              });

              // Reset other categories
              whatWeAreGreatAtData.categories.forEach((_, idx) => {
                if (idx !== categoryIndex) {
                  const otherCategory = leftSection.querySelector(
                    `[data-category="${idx}"]`
                  );
                  if (otherCategory) {
                    gsap.set(otherCategory, {
                      fontWeight: "normal",
                      color: "#9CA3AF",
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                }
              });

              // Highlight current right item
              // gsap.to(rightItem, {
              //   opacity: 1,
              //   y: 0,
              //   duration: 0.5,
              //   ease: "power2.out",
              // });
            },
            // onLeave: () => {
            //   gsap.to(rightItem, {
            //     opacity: 0.7,
            //     y: 10,
            //     duration: 0.3,
            //     ease: "power2.out",
            //   });
            // },
            onEnterBack: () => {
              // Update left category styling
              gsap.set(leftCategory, {
                fontWeight: "bold",
                color: "#000000",
                duration: 0.3,
                ease: "power2.out",
              });

              // Reset other categories
              whatWeAreGreatAtData.categories.forEach((_, idx) => {
                if (idx !== categoryIndex) {
                  const otherCategory = leftSection.querySelector(
                    `[data-category="${idx}"]`
                  );
                  if (otherCategory) {
                    gsap.set(otherCategory, {
                      fontWeight: "normal",
                      color: "#9CA3AF",
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                }
              });

              // Highlight current right item
              // gsap.to(rightItem, {
              //   fontWeight: "normal",
              //   opacity: 1,
              //   y: 0,
              //   duration: 0.5,
              //   ease: "power2.out",
              // });
            },
            // onLeaveBack: () => {
            //   gsap.to(rightItem, {
            //     fontWeight: "bold",
            //     opacity: 0.7,
            //     y: 10,
            //     duration: 0.3,
            //     ease: "power2.out",
            //   });
            // },
          });

          currentItemIndex++;
        });
      });

      // Initialize first category as active
      const firstCategory = leftSection.querySelector(`[data-category="0"]`);
      if (firstCategory) {
        gsap.set(firstCategory, {
          fontWeight: "bold",
          color: "#000000",
        });
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  // Flatten all items for rendering
  const allItems = whatWeAreGreatAtData.categories.flatMap(
    (category, categoryIndex) =>
      whatWeAreGreatAtData.item[categoryIndex].map((item, itemIndex) => ({
        category,
        item,
        categoryIndex,
        itemIndex,
        globalIndex:
          whatWeAreGreatAtData.item
            .slice(0, categoryIndex)
            .reduce((acc, curr) => acc + curr.length, 0) + itemIndex,
      }))
  );

  return (
    <section className="py-10 md:py-[120px]">
      <div className="containerX" ref={containerRef}>
        <SectionHeader className="!text-black text-start">
          What We&apos;re Great At
        </SectionHeader>
      </div>

      <div className="containerX flex">
        {/* Left Section - Sticky */}
        <div
          ref={leftSectionRef}
          className="hidden md:flex w-1/2 sticky top-0 h-screen  flex-col pr-8 bg-white space-y-10 py-20"
        >
          {whatWeAreGreatAtData.categories.map((category, index) => (
            <p
              key={category}
              data-category={index}
              className="font-inter text-4xl text-text-600 font-normal transition-all duration-300 cursor-pointer hover:text-black leading-[1.1]"
              style={{
                fontWeight: index === 0 ? "bold" : "normal",
                color: index === 0 ? "#000000" : "#9CA3AF",
              }}
            >
              {category}
            </p>
          ))}
        </div>

        {/* Right Section - Scrollable */}
        <div ref={rightSectionRef} className="hidden md:block w-1/2 bg-white">
          <div className="py-20 px-16">
            {whatWeAreGreatAtData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {whatWeAreGreatAtData.item[categoryIndex].map(
                  (item, itemIndex) => (
                    <div
                      key={`${categoryIndex}-${itemIndex}`}
                      data-item={`${categoryIndex}-${itemIndex}`}
                      className="opacity-70 transform translate-y-2 transition-all duration-500"
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
                          color: "#EDEDED", // light gray
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
