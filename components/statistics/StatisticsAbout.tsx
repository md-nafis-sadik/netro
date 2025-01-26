import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { successStoryData } from "@/services/data/shared.data";

const StatisticsAbout = () => {
  return (
    <div className="containerX grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10 md:my-20 lg:my-[120px]">
      {successStoryData.map(({ type, value, ext, color }, index) => (
        <div className="flex flex-col items-center gap-1 md:gap-3" key={index}>
          <p
            className={cn(
              "text-[54px] md:text-6xl lg:text-7xl xl:text-[128px] font-bold !leading-[0.9] uppercase text-center w-full font-scout-cond"
            )}
          >
            <span className="text-text-900">{value}</span>
            <span
              className={cn(ext === "+" ? "text-main-400" : "text-text-900")}
            >
              {ext}
            </span>
          </p>
          <p
            className={cn(
              "text-sm md:text-2xl font-medium !leading-[0.9] text-text-600 uppercase font-inter"
            )}
          >
            {type}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsAbout;
