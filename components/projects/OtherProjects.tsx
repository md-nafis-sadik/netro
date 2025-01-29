import { projectsData } from "@/services/data";
import SliderContainer from "../shared/SlideContainer";
import ProjectHomeCard from "./ProjectHomeCard";

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
              <ProjectHomeCard
                key={index}
                item={item}
                className="relative bg-transparent min-w-[280px] sm:min-w-[400px] md:min-w-[522px]"
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
