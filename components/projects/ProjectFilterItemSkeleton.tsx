import { cn } from "@/lib/utils";
import Skeleton from "../shared/Skeleton";

const ProjectFilterItemSkeleton = () => {
  return <Skeleton className={cn("w-full h-[62px] md:h-[70px]")} />;
};

export default ProjectFilterItemSkeleton;
