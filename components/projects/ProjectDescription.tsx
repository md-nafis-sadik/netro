"use client";
import Image from "next/image";
import DescriptionHeader from "../common/DescriptionHeader";
import CarrierFlowSection from "./CarrierFlowSection";
import DescriptionBoxes from "../common/DescriptionBoxes";

const ProjectDescription = ({ project }: any) => {
  return (
    <section className="font-inter bg-darkPurplebg p-10 md:p-16 lg:p-20">
      <div className="containerX">
        <DescriptionHeader
          title="Project Description"
          text={project?.data?.projectDescription || "Project description not found."}
        />
        <DescriptionBoxes
          detailPoints={project.data.detailPoints}
          title="Section Title"
          variant="blue" // or "white", "blue", "gradient"
          className="additional-classes"
        />

        <Image
          src={project?.data?.descriptionImages[0]}
          alt={project?.data?.title || "Project Image"}
          width={1176}
          height={648}
          className="w-full mt-10 md:mt-16 lg:mt-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10 mb-16 md:mb-24 lg:mb-30">
          <Image
            src={project?.data?.descriptionImages[1]}
            alt={project?.data?.title || "Project Image"}
            width={568}
            height={633}
            className="w-full"
          />
          <Image
            src={project?.data?.descriptionImages[2]}
            alt={project?.data?.title || "Project Image"}
            width={568}
            height={633}
            className="w-full"
          />
        </div>

        <DescriptionHeader
          title="Problem identification"
          text={project?.data?.problemIdentification || "Problem identification text not found."}
        />

        <CarrierFlowSection items={project?.data?.problemIdentificationPoints} />
        <Image
          src={project?.data?.descriptionImages[0]}
          alt={project?.data?.title || "Project Image"}
          width={1176}
          height={648}
          className="w-full mt-13 md:mt-20 lg:mt-32"
        />
      </div>
    </section>
  );
};

export default ProjectDescription;
