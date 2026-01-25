import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import { images } from "@/services";

interface IFProductCardProps {
  item: any;
}

const OtherProductCard = ({ item }: IFProductCardProps) => {
  return (
    <div
      className={cn(
        "w-full min-w-[90%] 2xl:min-w-[376px] aspect-[328/418] xl:aspect-[376/460] last:aspect-[328/418] md:last:aspect-[376/240] xl:last:aspect-[376/460] last:col-span-1 md:last:col-span-2 xl:last:col-span-1 overflow-hidden bg-neutral-50 group transition_common relative",
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
            {/* <Image
              src={images.netroLogo}
              alt={item?.title}
              className="h-auto w-9 md:w-12 lg:w-14"
              height={200}
              width={300}
            /> */}

            <div className="flex flex-col mt-auto">
              <p className="text-text-50 font-bold font-scoutcond text-[32px] xl:text-[36px] 2xl:text-[40px] leading-[100%] line-clamp-1">
                {item?.title}
              </p>
              <p className="text-xs md:text-sm 2xl:text-base font-normal !leading-[1.4] text-text-200 mt-3 font-inter line-clamp-2">
                {item?.metaDescription}
              </p>
              {/* <p
                className={cn(
                  "text-[10px] md:text-xs font-normal !leading-[1.6] text-text-200 font-inter"
                )}
              >
                {item?.tagList}
              </p> */}
              {/* 
              <Link href={item?.url ? item?.url : `/portfolio/${item?.title}`}>
                <Button className="w-fit group mt-3 md:mt-4 py-2">
                  <span className="!leading-none text-xs md:text-base">
                    See Details
                  </span>
                  <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherProductCard;
