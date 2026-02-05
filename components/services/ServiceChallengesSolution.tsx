import React from "react";
import DescriptionHeader from "../common/DescriptionHeader";

interface Challenge {
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    title: "AI Adoption Without Clear ROI",
    description:
      "We identify high-impact use cases and design solutions that deliver measurable business outcomes, not experiments.",
  },
  {
    title: "Legacy Systems That Can't Leverage AI",
    description:
      "Crafting intuitive and engaging user experiences that blend aesthetics with usability.",
  },
  {
    title: "Unstructured & Fragmented Data",
    description:
      "We transform scattered documents, logs, and databases into AI-ready, searchable knowledge systems.",
  },
  {
    title: "Scaling AI from PoC to Production",
    description:
      "We engineer production-grade architectures with monitoring, cost control, and performance optimization.",
  },
  {
    title: "Security, Privacy & Regulatory Risks",
    description:
      "We embed governance, access control, and compliance (GDPR, SOC2, ISO) into every AI system.",
  },
  {
    title: "Unreliable Outputs & Hallucinations",
    description:
      "We apply retrieval, validation, guardrails, and evaluation frameworks to ensure trustworthy AI behavior.",
  },
];

const ServiceChallengesSolution = () => {
  return (
    <section className="bg-darkPurplebg py-8 md:py-16 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Side - Title and Subtitle */}
          <div className="flex flex-col justify-center">
            <DescriptionHeader
              title="CHALLENGES AND SOLUTION"
              text="Turning AI complexity into reliable, scalable, and compliant software solutions."
              className="items-center lg:items-start"
              descriptionClassName="text-center lg:text-left"
            />
          </div>

          {/* Right Side - Challenges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8 md:gap-x-12">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex flex-col">
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
