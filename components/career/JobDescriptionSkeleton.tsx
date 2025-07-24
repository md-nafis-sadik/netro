import Skeleton from "../shared/Skeleton";

const JobDescriptionSkeleton = () => {
  return (
    <div className="containerX pb-20">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
        {/* LEFT PORTION */}
        <div className="w-full max-w-[462px]">
          <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col gap-6 sticky top-20">
            <div>
              <Skeleton className="h-[28px] md:h-[32px] w-3/4 min-w-[200px] md:min-w-[250px]" />
              <Skeleton className="h-[20px] mt-3 w-full min-w-[300px]" />
            </div>
            <div className="flex flex-col gap-4 border-t border-dashed border-natural-300 pt-6">
              <div>
                <Skeleton className="h-[14px] w-24" />
                <Skeleton className="h-[18px] mt-2 w-40" />
              </div>
              <div>
                <Skeleton className="h-[14px] w-16" />
                <Skeleton className="h-[18px] mt-2 w-32" />
              </div>
              <div>
                <Skeleton className="h-[14px] w-40" />
                <Skeleton className="h-[18px] mt-2 w-32" />
              </div>
            </div>
            <Skeleton className="h-[44px] w-36" />
            <Skeleton className="h-[14px] w-60" />
          </div>
        </div>

        {/* RIGHT PORTION */}
        <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
          {/* DESCRIPTION */}
          <div>
            <Skeleton className="h-[28px] md:h-[32px] w-52" />
            <div className="flex flex-col gap-3 mt-6 sm:mt-8 md:mt-10">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-[16px] md:h-[18px] w-full" />
              ))}
            </div>
          </div>

          {/* MINIMUM QUALIFICATION */}
          <div>
            <Skeleton className="h-[28px] md:h-[32px] w-72" />
            <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 sm:gap-8 md:gap-10"
                >
                  <Skeleton className="h-[24px] w-[24px] md:h-[28px] md:w-[28px]" />
                  <Skeleton className="h-[16px] md:h-[20px] w-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* PREFERRED QUALIFICATION */}
          <div>
            <Skeleton className="h-[28px] md:h-[32px] w-80" />
            <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 sm:gap-8 md:gap-10"
                >
                  <Skeleton className="h-[24px] w-[24px] md:h-[28px] md:w-[28px]" />
                  <Skeleton className="h-[16px] md:h-[20px] w-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY BENEFITS */}
          <div>
            <Skeleton className="h-[28px] md:h-[32px] w-64" />
            <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 sm:gap-8 md:gap-10"
                >
                  <Skeleton className="h-[24px] w-[24px] md:h-[28px] md:w-[28px]" />
                  <Skeleton className="h-[16px] md:h-[20px] w-full" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionSkeleton;
