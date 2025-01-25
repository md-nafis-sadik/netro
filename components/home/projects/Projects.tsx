import ScrollStickToTop from "@/components/shared/animations/ScrollStickToTop";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import { projectsData } from "@/services/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="bg-black w-full py-20 overflow-hidden mt-40">
      <div className="containerX flex_center flex-col">
        <SectionSubHeader dark text="Explore Projects" />
        <SectionHeader
          lite
          text="Projects That Speak"
          className="mt-5 md:mt-10"
        />
        <SectionHeader lite text="for Themselves" />

        <div className="flex flex-col gap-6 md:gap-10 mt-10 md:mt-20 w-full">
          {projectsData.map(
            ({ name, description, tagList, image, icon }, index) => (
              <ProjectCard
                name={name}
                bgImage={image}
                description={description}
                tagList={tagList}
                top={(index + 1) * 50}
                key={index}
                index={index}
                icon={icon}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
