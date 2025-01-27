import SectionHeader from "@/components/common/SectionHeader";
import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { successStoryData } from "@/services/data/shared.data";

const StatisticsHome = () => {
  return (
    <section className="bg-black pt-20 pb-20 md:pb-[120px] select-none">
      <div className="containerX">
        <SectionHeader
          text="Numbers That Showcase"
          className="md:mt-10 lg:mt-20 xl:mt-[120px]"
          lite
        />
        <SectionHeader text="Our Success Story" lite />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10 md:my-20 lg:my-[120px]">
          {successStoryData.map(({ type, value, ext, color }, index) => (
            <div
              className="flex flex-col items-center gap-1 md:gap-3"
              key={index}
            >
              <p
                className={cn(
                  "text-[54px] md:text-6xl lg:text-7xl xl:text-[128px] font-bold !leading-[0.9] uppercase font-scoutcond"
                )}
                style={{ color: color }}
              >
                <span>{value}</span>
                <span>{ext}</span>
              </p>
              <p
                className={cn(
                  "text-sm md:text-2xl font-medium !leading-[0.9] text-text-200 uppercase font-inter"
                )}
              >
                {type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsHome;
