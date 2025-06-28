import Skeleton from "../shared/Skeleton";

const TestimonialSkeleton = () => {
  return (
    <div className="containerX w-full py-20 md:py-[120px] relative">
      <div className="relative">
        <Skeleton className="h-12 md:h-20 w-full" />
        <Skeleton className="h-12 md:h-20 w-4/5 mx-auto mt-4 md:mt-6" />

        <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 w-full mt-10 md:mt-20">
          <Skeleton className="h-8 md:h-10 w-4/5 mx-auto" />
          <Skeleton className="h-8 md:h-10 w-3/5 mx-auto" />
          <Skeleton className="h-8 md:h-10 w-2/5 mx-auto" />
        </div>

        <div className="flex flex-row gap-3 items-center justify-center mt-6">
          <Skeleton className="w-[52px] md:w-[60px] h-[52px] md:h-[60px] rounded-md" />

          <div className="flex flex-col gap-2 items-start">
            <Skeleton className="h-4 md:h-6 w-[120px]" />
            <Skeleton className="h-2 md:h-4 w-[60px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
