"use client";
import { useProjectAnimation } from "@/hooks/useProjectAnimation";
import { cn } from "@/lib/utils";
import { IProject } from "@/services";
import { projects } from "@/services/data";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";
import ProjectCard from "./ProjectCard";

function ProjectsHome() {
  const { cardsRef, activeIndex } = useProjectAnimation();

  return (
    <section
      data-bg-theme="dark"
      className="pt-10 md:pt-16 lg:pt-20 pb-10 bg-blue-900 "
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader
          dark
          text="Explore Projects"
          className="border-0 bg-main-950 text-white"
        />
        <SectionHeader className="home_projects_header">
          Our Projects
        </SectionHeader>

        <div
          ref={cardsRef}
          className="flex flex-col items-center w-full relative mt-12 md:mt-16 lg:mt-20"
        >
          {projects.map((item: IProject, index: number) => (
            <ProjectCard
              className={cn("stacked-card sticky left-0 top-0 mb-60 lg:mb-80 rounded-2xl md:rounded-3xl")}
              style={{
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsHome;
