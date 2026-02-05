import { cn } from "@/lib/utils";
import Image from "next/image";

interface IFProductCardProps {
  item: any;
}

const OtherProductCard = ({ item }: IFProductCardProps) => {
  return (
    <div
      className={cn(
        "w-full min-w-[100%] sm:min-w-[376px] aspect-[376/460] overflow-hidden bg-neutral-50 group relative animate-item3 rounded-xl md:rounded-2xl",
      )}
    >
      <Image
        src={item?.featuredImage}
        alt={item?.title || "Project"}
        className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
        width={1920}
        height={1280}
      />

      {(item?.author ||
        item?.metaDescription ||
        item?.tagList ||
        item?.title) && (
        <div
          className={cn(
            "absolute left-0 bottom-0 w-full h-[45%] xl:h-[40%] md:max-w-full project-home-blur transition_common ",
          )}
        >
          <div className="pr-6 pl-4 pb-4 pt-5 md:pr-14 md:pl-6 md:pt-12 md:pb-6 h-full flex flex-col justify-between gap-4 md:gap-6">
            <div className="flex flex-col mt-auto">
              <p className="text-text-50 font-bold font-scoutcond text-[32px] xl:text-[36px] 2xl:text-[40px] leading-[100%] line-clamp-1">
                {item?.title}
              </p>
              <p className="text-xs md:text-sm 2xl:text-base font-normal !leading-[1.4] text-text-200 mt-3 font-inter line-clamp-2">
                {item?.metaDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherProductCard;
