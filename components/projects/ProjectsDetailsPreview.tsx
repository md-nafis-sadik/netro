import { cn } from "@/lib/utils";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";

const ProjectsDetailsPreview = ({ project }: any) => {
  return (
    <section className="bg-black w-full py-20 relative">
      <div className="flex_center flex-col">
        <SectionHeader className="home_projects_header pb-10 md:pb-28">
          Some Key Previews
        </SectionHeader>

        <div className="containerX grid grid-cols-4 min-h-[600px] gap-6 md:gap-10">
          {project?.data?.projectImages
            ?.slice?.(0, 6)
            ?.map((item: any, index: number) => (
              <div
                className={cn(
                  index < 2 || index > 3
                    ? "col-span-4 md:col-span-1"
                    : "col-span-4 md:col-span-2",
                  "relative h-[250px] md:h-[300px] overflow-hidden group"
                )}
                key={index}
              >
                <Image
                  src={item}
                  alt={project?.data?.title}
                  width={1920}
                  height={1280}
                  className="w-full h-full object-cover group-hover:scale-105 transition_common"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetailsPreview;
