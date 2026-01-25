"use client";
import { useAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import { useRef } from "react";
import DescriptionHeader from "../common/DescriptionHeader";

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
            width={1176}
            height={648}
            className="w-full mt-6 md:mt-16 lg:mt-20"
          />
        </div>
        <div ref={secondImgRef}>
          <Image
            src={project?.data?.brandingImages[1]}
            alt={project?.data?.title || "Project Image"}
            width={1176}
            height={648}
            className="w-full mt-6 md:mt-16 lg:mt-20"
          />
        </div>
        <DescriptionHeader
          title="Wireframes to  Final Design"
          text={
            project?.data?.wireframeDetails || "Wireframe details not found."
          }
          className="mt-16 md:mt-28 lg:mt-40"
        />

        <div ref={thiredImgRef}>
          <Image
            src={project?.data?.wireframeImages[0]}
            alt={project?.data?.title || "Project Image"}
            width={1176}
            height={648}
            className="w-full mt-10 md:mt-16 lg:mt-32"
          />
        </div>
        <div className="grid md:grid-cols-6 gap-4  mt-10 md:mt-20 lg:mt-32">
          <div className="md:col-span-6 md:row-span-2 bg-[#014A43] h-[218px] sm:h-[420px] lg:h-[648px]">
            1
          </div>
          <div className="md:col-span-3 md:row-span-2 md:row-start-3 bg-[#014A43] h-[218px] sm:h-[420px] lg:h-[648px]">
            2
          </div>
          <div className="md:col-span-3 md:row-span-2 md:row-start-3 bg-[#014A43] h-[218px] sm:h-[420px] lg:h-[648px]">
            3
          </div>
          <div className="md:col-span-2 md:row-start-5 bg-[#014A43] h-[218px] sm:h-[420px] lg:h-[365px]">
            4
          </div>
          <div className="md:col-span-2 md:row-start-5 bg-[#014A43] h-[218px] sm:h-[420px] lg:h-[365px]">
            4
          </div>
          <div className="md:col-span-2 md:row-start-5 bg-[#014A43] h-[218px] sm:h-[420px] lg:h-[365px]">
            5
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBranding;
