import { cn } from "@/lib/utils";
import { aboutViewData } from "@/services/data";
import Image from "next/image";

const ViewAbout = () => {
  return (
    <section className="containerX overflow-hidden">
      <div className="mx-auto min-h-[704px]">
        <div className="flex gap-4 sm:gap-6 pt-10">
          {aboutViewData.map(({ image, title, description }, index) => (
            <div
              className={cn(
                index === 1
                  ? "h-[234px] md:h-[544px] -translate-y-[11%]"
                  : "h-[186px] md:h-[434px]",
                "min-w-[33%] relative overflow-hidden transition_common"
              )}
              key={index}
            >
              <Image
                src={image}
                alt={title}
                aria-label={description}
                width={1280}
                height={1280}
                className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
              />
            </div>
          ))}
        </div>
      </div>

      <p
        className={cn(
          "text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900 my-10 md:mt-20 md:mb-[120px]"
        )}
      >
        Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture.
      </p>
    </section>
  );
};

export default ViewAbout;
