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
          backgroundImage: "url('/images/project/simigo-bg.webp')",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="containerX overflow-hidden">
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
            <span className="font-semibold">Simigo- A Vibrant eSIM Brand</span>
          </div>
          <div className="portfolio_details_header text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold w-fit text-start leading-[120%] mt-4">
            {project?.data?.title || "Portfolio Title Not Found"}
          </div>

          <p className="font-inter text-sm md:text-xl lg:text-2xl font-normal md:font-light !leading-[1.4] text-start text-white mt-2">
            {project?.data?.subtitle || "Portfolio Subtitle Not Found"}
          </p>
          <Image
            src={project?.data?.topImage || "/images/project/simigo-bg.webp"}
            alt={project?.data?.title || "Portfolio Background"}
            width={1176}
            height={648}
            className="w-full -mb-28 mt-14"
          />
        </div>
      </div>
      <div className="bg-darkPurplebg">
        <div className="containerX">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
            {/* LEFT PORTION */}
            <div className="w-full max-w-full md:max-w-[482px]">
              <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col gap-6 sticky top-20">
                <div>
                  <h2 className="titleMd text-text-900">Project info</h2>
                </div>
                <div className="flex flex-col gap-4 border-t border-dashed border-natural-300 pt-6">
                  <div>
                    <p className="text-sm text-text-600 uppercase">Category</p>
                    <p className="para text-text-900 font-semibold mt-2">
                      {project?.data?.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-600 uppercase">
                      Client Origin
                    </p>
                    <p className="para text-text-900 font-semibold mt-2">
                      {project?.data?.clientOrigin}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-text-600 uppercase">Timeline</p>
                    <p className="para text-text-900 font-semibold mt-2">
                      {project?.data?.timeline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-y-2 gap-x-2 md:gap-x-6 flex-wrap">
                  {project?.data?.liveUrl && (
                    <Link
                      href={project?.data?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="group max-w-max h-full">
                        <span className="!leading-none">Live Preview</span>
                        <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                      </Button>
                    </Link>
                  )}

                  <GradientButton
                    className="w-fit !bg-white !text-black hover:!text-white h-full"
                    containerClassName="max-w-max"
                    href="/contact-us"
                  >
                    <span className="!leading-none">Talk to an expert</span>
                  </GradientButton>
                </div>
              </div>
            </div>

            {/* RIGHT PORTION */}
            <div
              className="project-content max-w-full lg:max-w-[55%] break-words"
              dangerouslySetInnerHTML={{ __html: project?.data?.content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
