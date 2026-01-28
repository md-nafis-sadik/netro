"use client";
import { useAnimation, useStaggerReveal } from "@/hooks/useAnimation";
import Image from "next/image";
import { useRef } from "react";
import DescriptionBoxes from "../common/DescriptionBoxes";
import DescriptionHeader from "../common/DescriptionHeader";
// import CarrierFlowSection from "./CarrierFlowSection";
import dynamic from "next/dynamic";

const PulseBlock = ({ className }: { className?: string }) => (
  <div
    className={`w-full min-h-[180px] animate-pulse bg-neutral-900/10 ${className ?? ""}`}
    aria-busy="true"
    aria-live="polite"
  />
);

const CarrierFlowSection = dynamic(() => import("./CarrierFlowSection"), {
  loading: () => <PulseBlock className="min-h-[240px]" />,
});

const ProjectDescription = ({ project }: any) => {
  const sectionRef = useRef<HTMLElement>(null);
  const firstImageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);
  useAnimation(firstImageRef, {});
  useAnimation(lastImageRef, {});
  useStaggerReveal(gridRef, {});

  const descriptionImages = project?.data?.descriptionImages || [];
  const hasImages = descriptionImages.length > 0;

  return (
    <section
      ref={sectionRef}
      className="font-inter bg-darkPurplebg py-8 md:py-16 lg:py-20"
    >
      <div className="container">
        <DescriptionHeader
          title="Project Description"
          text={
            project?.data?.projectDescription ||
            "Project description not found."
          }
        />
        <DescriptionBoxes
          detailPoints={project?.data?.detailPoints}
          title="Section Title"
          variant="blue" // or "white", "blue", "gradient"
          className="additional-classes"
        />

        {hasImages && descriptionImages[0] && (
          <div ref={firstImageRef}>
            <Image
              src={descriptionImages[0]}
              alt={project?.data?.title || "Project Image"}
              width={1176}
              height={648}
              className="w-full mt-10 md:mt-16 lg:mt-20"
            />
          </div>
        )}

        {descriptionImages.length >= 3 && (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10 mb-16 md:mb-24 lg:mb-30"
          >
            <Image
              src={descriptionImages[1]}
              alt={project?.data?.title || "Project Image"}
              width={568}
              height={633}
              className="w-full"
            />
            <Image
              src={descriptionImages[2]}
              alt={project?.data?.title || "Project Image"}
              width={568}
              height={633}
              className="w-full"
            />
          </div>
        )}

        <DescriptionHeader
          title="Problem identification"
          text={
            project?.data?.problemIdentification ||
            "Problem identification text not found."
          }
        />

        <CarrierFlowSection
          items={project?.data?.problemIdentificationPoints}
        />

        {hasImages && descriptionImages[0] && (
          <div ref={lastImageRef}>
            <Image
              src={descriptionImages[0]}
              alt={project?.data?.title || "Project Image"}
              width={1176}
              height={648}
              className="w-full mt-10 md:mt-16 lg:mt-32"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDescription;
