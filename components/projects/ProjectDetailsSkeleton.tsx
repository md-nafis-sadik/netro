import SectionHeader from "../common/SectionHeader";
import Skeleton from "../shared/Skeleton";

const ProjectDetailsSkeleton = () => {
  return (
    <section className="pt-20 font-inter">
      <div className="pb-10 sm:pb-16 md:pb-20 lg:pb-30">
        <div className="containerX py-14 md:py-20 lg:py-[100px]">
          <Skeleton className="h-[36px] md:h-[48px] w-full min-w-[200px] md:min-w-[300px]" />
          <Skeleton className="h-[36px] md:h-[48px] w-1/2 min-w-[200px] md:min-w-[300px] mt-4" />
          <Skeleton className="h-[28px] md:h-[32px] w-3/4 min-w-[200px] md:min-w-[250px] mt-6" />
        </div>

        <div className="containerX">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
            {/* LEFT SKELETON BLOCK */}
            <div className="w-full max-w-full md:max-w-[482px]">
              <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col gap-6 sticky top-20">
                <Skeleton className="h-[28px] w-1/3" />

                <div className="flex flex-col gap-4 border-t border-dashed border-natural-300 pt-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-[14px] w-1/4 mb-2" />
                      <Skeleton className="h-[18px] w-2/3" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-row gap-y-2 gap-x-2 md:gap-x-6 flex-wrap">
                  <Skeleton className="h-10 w-[130px]" />
                  <Skeleton className="h-10 w-[160px]" />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT SKELETON */}
            <div className="w-full max-w-full lg:max-w-[55%] flex flex-col gap-10">
              <Skeleton className="h-[36px] md:h-[48px] w-full min-w-[200px] md:min-w-[300px]" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {/* Bold Label */}
                  <Skeleton className="h-[20px] w-[120px]" />

                  {/* Section Title */}
                  <Skeleton className="h-[24px] w-2/3" />

                  {/* Description Paragraph */}
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-[16px] w-full" />
                    <Skeleton className="h-[16px] w-[90%]" />
                    <Skeleton className="h-[16px] w-[80%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full py-20 relative">
        <div className="flex_center flex-col">
          <SectionHeader className="home_projects_header pb-10 md:pb-28">
            Some Key Previews
          </SectionHeader>

          <div className="containerX flex flex-col items-center mb-40 w-full relative">
            <Skeleton
              className="w-full h-[728px] max-h-[728px] md:h-[640px] md:max-h-[640px] bg-neutral-800"
              shimmerClassName="from-transparent via-neutral-500 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSkeleton;
