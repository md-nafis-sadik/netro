import SectionHeaderAnimated from "@/components/common/SectionHeaderAnimated";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import { projectsData } from "@/services/data";
import ProjectCard from "./ProjectHomeCard";
import SectionHeader from "../common/SectionHeader";

const ProjectsHome = () => {
  return (
    <section className="bg-black w-full py-20 relative">
      <div className="containerX flex_center flex-col">
        <SectionSubHeader dark text="Explore Projects" />

        <SectionHeader className="home_projects_header">
          Projects That Speak <br /> for Themselves
        </SectionHeader>

        <div className="flex flex-col gap-6 md:gap-10 mt-10 md:mt-20 w-full">
          {projectsData.map((item, index) => (
            <ProjectCard item={item} top={(index + 1) * 50} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
