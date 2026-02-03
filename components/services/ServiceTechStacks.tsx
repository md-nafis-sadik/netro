import React from "react";
import DescriptionHeader from "../common/DescriptionHeader";

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
  return (
    <section className="bg-[#0A0A1F] py-16 md:py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <DescriptionHeader
          title="CHALLENGES AND SOLUTION"
          text="Turning AI complexity into reliable, scalable, and compliant software solutions."
          className="mb-12 md:mb-16"
          descriptionClassName="max-w-full"
        />

        {/* Tech Stacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="bg-[#0F1A3D] rounded-lg p-6 lg:p-8 flex flex-col transition-all duration-300 hover:bg-[#152047]"
            >
              {/* Icon */}
              <div className="mb-4" style={{ color: stack.color || "#FFC400" }}>
                {stack.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl lg:text-2xl font-semibold mb-3">
                {stack.title}
              </h3>

              {/* Description */}
              <p className="text-[#A5A5BA] text-sm md:text-base leading-relaxed">
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
