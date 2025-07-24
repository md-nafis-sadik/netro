import { cn } from "@/lib/utils";
import Skeleton from "../shared/Skeleton";

const ProjectsPreviewServicesSkeleton = () => {
  return (
    <div className="h-full w-full grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20 pt-10 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
      {Array.from({ length: 5 }).map(
        (_, index: number): React.ReactElement => (
          <Skeleton
            key={index}
            className={cn(
              "w-full h-[728px] max-h-[728px] md:h-[640px] md:max-h-[640px] bg-neutral-800",
              (index + 1) % 3 === 0 ? "md:col-span-2" : ""
            )}
            shimmerClassName="from-transparent via-neutral-500 to-transparent"
          />
        )
      )}
    </div>
  );
};

export default ProjectsPreviewServicesSkeleton;
