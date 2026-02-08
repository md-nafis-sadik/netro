"use client";

import React from "react";
import DescriptionHeader from "../common/DescriptionHeader";
import { servicesPageContent } from "@/services/data/services.data";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";

const ServiceChallengesSolution = () => {
  const { title, description, challenges } =
    servicesPageContent.challengesSolution;

  const sectionRef = useAppearanceAnimation(".animate-challenge", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.1,
  });
  return (
    <section
      ref={sectionRef}
      className="bg-darkPurplebg py-8 md:py-16 lg:py-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Side - Title and Subtitle */}
          <div className="flex flex-col justify-center">
            <DescriptionHeader
              title={title}
              text={description}
              className="items-center lg:items-start"
              descriptionClassName="text-center lg:text-left"
            />
          </div>

          {/* Right Side - Challenges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8 md:gap-x-12">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex flex-col animate-challenge">
                <h3 className="text-main-400 text-base md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4 leading-snug">
                  {challenge.title}
                </h3>
                <p className="text-text-50 text-sm md:text-base leading-relaxed">
                  {challenge.description}
                </p>
                {index < challenges.length && (
                  <hr className="border-t border-[#3A3B3F] mt-4 md:mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceChallengesSolution;
