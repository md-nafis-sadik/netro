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
    <section className="font-inter bg-darkPurplebg p-10 md:p-16 lg:p-20">
      <div className="containerX">
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
            className="w-full mt-10 md:mt-16 lg:mt-20"
          />
        </div>
        <div ref={secondImgRef}>
          <Image
            src={project?.data?.brandingImages[1]}
            alt={project?.data?.title || "Project Image"}
            width={1176}
            height={648}
            className="w-full mt-10 md:mt-16 lg:mt-20"
          />
        </div>
        <DescriptionHeader
          title="Wireframes"
          text={
            project?.data?.wireframeDetails || "Wireframe details not found."
          }
          className="mt-24 md:mt-32 lg:mt-40"
        />

        <div ref={thiredImgRef}>
          <Image
            src={project?.data?.wireframeImages[0]}
            alt={project?.data?.title || "Project Image"}
            width={1176}
            height={648}
            className="w-full mt-13 md:mt-20 lg:mt-32"
          />
        </div>
        <div className="grid grid-cols-6 grid-rows-5 gap-4  mt-13 md:mt-20 lg:mt-32">
          <div className="col-span-6 row-span-2 bg-[#014A43]">1</div>
          <div className="col-span-3 row-span-2 row-start-3 bg-[#014A43]">
            2
          </div>
          <div className="col-span-3 row-span-2 row-start-3 bg-[#014A43]">
            3
          </div>
          <div className="col-span-2 row-start-5 bg-[#014A43] h-[300px]">4</div>
          <div className="col-span-2 row-start-5 bg-[#014A43] h-[300px]">4</div>
          <div className="col-span-2 row-start-5 bg-[#014A43] h-[300px]">5</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBranding;
