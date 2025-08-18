import { projectsData } from "@/services/data";
import SliderContainer from "../shared/SlideContainer";
import ProjectCard from "./ProjectCard";

function OtherProjects() {
  return (
    <div className="">
      <h2 className="title blackGradient text-center">
        Discover More Insights
      </h2>
      <div className="containerX overflow-hidden pt-6 pb-10 sm:mt-8 sm:pb-16 md:pt-20 md:pb-20">
        <SliderContainer className="relative">
          <div className="w-full min-h-fit flex flex-row gap-6 sm:gap-10 md:gap-15">
            {projectsData?.map((item, index) => (
              <ProjectCard
                key={index}
                item={item}
                className="stacked-card sticky left-0 top-0 mb-40 lg:aspect-[21/9]"
                showBottom={true}
              />
            ))}
          </div>
        </SliderContainer>
      </div>
    </div>
  );
}

export default OtherProjects;
