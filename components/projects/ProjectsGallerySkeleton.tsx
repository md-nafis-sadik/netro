import React from "react";
import Skeleton from "../shared/Skeleton";
import { cn } from "@/lib/utils";

const ProjectsGallerySkeleton = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20 pt-10 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
      {Array.from({ length: 6 }).map(
        (_, index: number): React.ReactElement => (
          <Skeleton
            key={index}
            className={cn(
              "w-full h-[728px] max-h-[728px] md:h-[640px] md:max-h-[640px]",
              (index + 1) % 3 === 0 ? "md:col-span-2" : ""
            )}
          />
        )
      )}
    </div>
  );
};

export default ProjectsGallerySkeleton;
