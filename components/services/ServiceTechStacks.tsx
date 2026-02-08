"use client";

import React from "react";
import DescriptionHeader from "../common/DescriptionHeader";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";

interface TechStack {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

interface ServiceTechStacksProps {
  stacks: TechStack[];
}

const ServiceTechStacks = ({ stacks }: ServiceTechStacksProps) => {
  const sectionRef = useAppearanceAnimation(".animate-tech", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.1,
  });
  return (
    <section ref={sectionRef} className="bg-darkPurplebg pb-8 md:pb-12 lg:pb-16">
      <div className="container">
        {/* Header */}
        <DescriptionHeader
          title="Tech Stacks"
          text="We ensured top technical stacks to achieve best class output for your initiative. Lets drive into those items here."
          className="mb-6 md:mb-12 lg:mb-16"
          descriptionClassName="max-w-full"
        />

        {/* Tech Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="bg-blue-950 rounded-2xl px-4 py-5 lg:px-8 lg:py-10 flex flex-col hover:scale-105 select-none border border-[#20338F] animate-tech"
            >
              {/* Icon */}
              <div className="mb-4" style={{ color: stack.color || "#FFC400" }}>
                {stack.icon}
              </div>

              {/* Title */}
              <div className="text-white text-base md:text-lg lg:text-xl font-semibold mb-2">
                {stack.title}
              </div>

              {/* Description */}
              <p className="text-text-600 text-sm md:text-base leading-[120%]">
                {stack.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTechStacks;
