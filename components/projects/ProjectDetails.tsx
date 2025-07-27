import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import SectionHeader from "../common/SectionHeader";
import { GradientButton } from "../ui/gradient-button";

const ProjectDetails = ({ project }: any) => {
  return (
    <section className="pb-10 sm:pb-16 md:pb-20 lg:pb-30 font-inter">
      <div className="containerX py-10 md:py-[100px]">
        <SectionHeader className="portfolio_details_header w-fit text-start">
          {project?.data?.title || "Portfolio Title Not Found"}
        </SectionHeader>

        <p className="font-inter text-sm md:text-2xl font-normal md:font-light !leading-[1.4] uppercase text-center md:text-start text-text-600 mt-6">
          {project?.data?.tags?.map((tag: string, index: number) => (
            <span key={index} className="mr-2 last:mr-0">
              {tag}
              {index < project.data.tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>

      <div className="containerX">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
          {/* LEFT PORTION */}
          <div className="w-full max-w-[482px]">
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

              <div className="flex flex-row gap-6">
                <Link href={"#applyForm"}>
                  <Button className="group max-w-max">
                    <span className="!leading-none">Live Preview</span>
                    <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                  </Button>
                </Link>
                <GradientButton
                  className="w-fit !bg-white !text-black hover:!text-white h-full"
                  containerClassName="max-w-max"
                  href={project?.data?.link}
                >
                  <span className="!leading-none">Talk to an expert</span>
                </GradientButton>
              </div>
            </div>
          </div>

          {/* RIGHT PORTION */}
          <div
            className="max-w-[55%]"
            dangerouslySetInnerHTML={{ __html: project?.data?.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
