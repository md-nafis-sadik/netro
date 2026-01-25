import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import SectionHeader from "../common/SectionHeader";
import { GradientButton } from "../ui/gradient-button";
import { url } from "inspector/promises";
import Image from "next/image";

const ProjectDetails = ({ project }: any) => {
  return (
    <section className="font-inter mt-[-60px]">
      <div
        className="pt-4 lg:pt-48"
        style={{
          backgroundImage: `url('${project?.data?.backgroundImageUrl}')`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="container overflow-hidden">
          <div className="flex items-center gap-2 text-white">
            <span>Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 0L10.1607 5.83927L16 8L10.1607 10.1607L8 16L5.83927 10.1607L0 8L5.83927 5.83927L8 0Z"
                fill="#FFC400"
              />
            </svg>
            <span className="font-semibold">{project?.data?.title || "Portfolio Title Not Found"}</span>
          </div>
          <div className="portfolio_details_header text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold w-fit text-start leading-[120%] mt-4">
            {project?.data?.title || "Portfolio Title Not Found"}
          </div>

          <p className="font-inter text-sm md:text-xl lg:text-2xl font-normal md:font-light !leading-[1.4] text-start text-white mt-2">
            {project?.data?.subtitle || "Portfolio Subtitle Not Found"}
          </p>
          {project?.data?.topImage && (
            <Image
              src={project?.data?.topImage}
              alt={project?.data?.title || "Portfolio Background"}
              width={1176}
              height={648}
              className="w-full -mb-28 mt-14"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
