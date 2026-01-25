"use client";
import { useAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import { useRef } from "react";
import DescriptionBoxes from "../common/DescriptionBoxes";
import DescriptionHeader from "../common/DescriptionHeader";

const ProjectSolution = ({ project }: any) => {
  const imgRef = useRef<HTMLDivElement>(null);
  useAnimation(imgRef, {});
  return (
    <section className="font-inter bg-white py-8 md:py-16 lg:py-28">
      <div className="container">
        <DescriptionHeader
          title="The Solution"
          text={
            project?.data?.solutionDescription ||
            "Solution description not found."
          }
          variant="dark"
        />
        <DescriptionBoxes
          detailPoints={project.data.solutionPoints}
          title="The Solution"
          variant="white" // or "white", "blue", "gradient"
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 md:mt-8 lg:mt-14"
          boxClassName="last:col-span-1"
        />
        <div ref={imgRef}>
          <Image
            src={project?.data?.solutionImage}
            alt={project?.data?.title || "Project Image"}
            width={1176}
            height={648}
            className="w-full mt-10 md:mt-16 lg:mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSolution;
