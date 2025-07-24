import React from "react";
import Skeleton from "../shared/Skeleton";
import { cn } from "@/lib/utils";

const JobPostsSkeleton = () => {
  return (
    <div className="containerX pb-10 md:pb-20">
      {Array.from({ length: 5 }).map(
        (_, index: number): React.ReactElement => (
          <Skeleton
            key={index}
            className={cn(
              "w-full h-[74px] max-h-[74px] md:h-[90px] md:max-h-[90px] mt-2 md:mt-4"
            )}
          />
        )
      )}
    </div>
  );
};

export default JobPostsSkeleton;
