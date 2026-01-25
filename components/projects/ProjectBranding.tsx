"use client";
import Image from "next/image";
import DescriptionHeader from "../common/DescriptionHeader";

const ProjectBranding = ({ project }: any) => {
  return (
    <section className="font-inter bg-darkPurplebg p-10 md:p-16 lg:p-20">
      <div className="container">
        <DescriptionHeader
          title="Software Branding"
          text={
            project?.data?.softwareBrandingDetails ||
            "Software Branding not found."
          }
        />

        <Image
          src={project?.data?.brandingImages[0]}
          alt={project?.data?.title || "Project Image"}
          width={1176}
          height={648}
          className="w-full mt-10 md:mt-16 lg:mt-20"
        />
        <Image
          src={project?.data?.brandingImages[1]}
          alt={project?.data?.title || "Project Image"}
          width={1176}
          height={648}
          className="w-full mt-10 md:mt-16 lg:mt-20"
        />

        <DescriptionHeader
          title="Wireframes"
          text={
            project?.data?.wireframeDetails || "Wireframe details not found."
          }
          className="mt-24 md:mt-32 lg:mt-40"
        />

        <Image
          src={project?.data?.wireframeImages[0]}
          alt={project?.data?.title || "Project Image"}
          width={1176}
          height={648}
          className="w-full mt-13 md:mt-20 lg:mt-32"
        />

        <div className="grid grid-cols-2 grid-rows-5 gap-4  mt-13 md:mt-20 lg:mt-32">
          <div className="col-span-2 row-span-2 bg-[#014A43]">1</div>
          <div className="row-span-2 row-start-3 bg-[#014A43]">2</div>
          <div className="row-span-2 row-start-3 bg-[#014A43]">3</div>
          <div className="row-start-5 bg-[#014A43]">4</div>
          <div className="row-start-5 bg-[#014A43]">5</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBranding;
