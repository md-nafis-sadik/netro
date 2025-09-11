import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { Fragment } from "react";

const ProjectsPreviewServices = ({ data }: any) => {
  return (
    <Fragment>
      {data?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mt-10 md:mt-10">
          {data?.slice(0, 5)?.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              item={item}
              shrinkedInGrid={(index + 1) % 3 !== 0}
              className={cn(
                "relative bg-transparent",
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
