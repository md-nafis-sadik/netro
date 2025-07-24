import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { Fragment } from "react";

const ProjectsPreviewServices = ({ data }: any) => {
  return (
    <Fragment>
      {data?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20 mt-10 md:mt-20">
          {data?.slice(0, 5)?.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              item={item}
              className={cn(
                "relative bg-transparent lg:h-[640px] lg:max-h-[640px]",
                (index + 1) % 3 === 0 ? "md:col-span-2" : ""
              )}
            />
          ))}
        </div>
      ) : (
        <div className="py-40">
          <p className="font-inter text-center text-2xl font-semibold">
            No work available for this segment.
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default ProjectsPreviewServices;
