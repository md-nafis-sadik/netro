"use client";
import { useAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import { useRef } from "react";
import DescriptionHeader from "../common/DescriptionHeader";
import ImageComparisonSlider from "../common/ImageComparisonSlider";

const ProjectBranding = ({ project }: any) => {
  const firstImgRef = useRef<HTMLDivElement>(null);
  const secondImgRef = useRef<HTMLDivElement>(null);
  const thiredImgRef = useRef<HTMLDivElement>(null);

  useAnimation(firstImgRef, {});
  useAnimation(secondImgRef, {});
  useAnimation(thiredImgRef, {});

  return (
    <section className="font-inter bg-darkPurplebg py-8 md:py-16 lg:py-20">
      <div className="container">
        <DescriptionHeader
          title="Software Branding"
          text={
            project?.data?.softwareBrandingDetails ||
            "Software Branding not found."
          }
        />
        <div ref={firstImgRef}>
          <Image
            src={project?.data?.brandingImages[0]}
            alt={project?.data?.title || "Project Image"}
            width={2352}
            height={1296}
            className="w-full mt-6 md:mt-16 lg:mt-20 rounded-2xl md:rounded-3xl"
          />
        </div>
        <div ref={secondImgRef}>
          <Image
            src={project?.data?.brandingImages[1]}
            alt={project?.data?.title || "Project Image"}
            width={2352}
            height={1296}
            className="w-full mt-6 md:mt-16 lg:mt-20 rounded-2xl md:rounded-3xl"
          />
        </div>
        <DescriptionHeader
          title="Wireframes to  Final Design"
          text={
            project?.data?.wireframeDetails || "Wireframe details not found."
          }
          className="mt-16 md:mt-28 lg:mt-40"
        />

        {/* ─── Image Comparison Slider ─── */}
        <div ref={thiredImgRef} className="mt-10 md:mt-16 lg:mt-32">
          <ImageComparisonSlider
            beforeImage={project?.data?.wireframeImages[0]}
            afterImage={project?.data?.wireframeImages[1]}
            alt={project?.data?.title || "Wireframe Comparison"}
            dividerColor="#099A8C"
            circleColor="#099A8C"
            arrowColor="white"
          />
        </div>

        {/* ─── Grid section (unchanged) ─── */}
        <div className="grid md:grid-cols-6 gap-6 md:gap-10 mt-10 md:mt-20 lg:mt-32">
          <div className="md:col-span-6 md:row-span-2">
            <Image
              src={project?.data?.wireframeGridImages[0]}
              alt={project?.data?.title || "Project Image"}
              width={2352}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-3 md:row-span-2 md:row-start-3">
            <Image
              src={project?.data?.wireframeGridImages[1]}
              alt={project?.data?.title || "Project Image"}
              width={1136}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-3 md:row-span-2 md:row-start-3">
            <Image
              src={project?.data?.wireframeGridImages[2]}
              alt={project?.data?.title || "Project Image"}
              width={1136}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:row-start-5">
            <Image
              src={project?.data?.wireframeGridImages[3]}
              alt={project?.data?.title || "Project Image"}
              width={730}
              height={730}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:row-start-5">
            <Image
              src={project?.data?.wireframeGridImages[4]}
              alt={project?.data?.title || "Project Image"}
              width={730}
              height={730}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:row-start-5">
            <Image
              src={project?.data?.wireframeGridImages[5]}
              alt={project?.data?.title || "Project Image"}
              width={730}
              height={730}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBranding;