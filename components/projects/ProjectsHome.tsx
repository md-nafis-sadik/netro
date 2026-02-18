"use client";
import { cn } from "@/lib/utils";
import { IProject } from "@/services";
import { projects } from "@/services/data";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";
import ProjectCard from "./ProjectCard";

function ProjectsHome() {
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
        <div className="sticky">
          <div className="flex flex-col items-center w-full relative mt-12 md:mt-16 lg:mt-20 gap-60 lg:gap-72">
            {projects.map((item: IProject, index: number) => (
              <ProjectCard
                className={cn(
                  "stacked-card sticky left-0 rounded-2xl md:rounded-3xl",
                )}
                style={{
                  top: 80 + index * 40,
                }}
                item={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHome;
