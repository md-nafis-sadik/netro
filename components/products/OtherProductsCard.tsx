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
        "w-full min-w-[90%] md:min-w-[621px] aspect-[328/360] lg:aspect-[31/18] overflow-hidden bg-text-700 group transition_common relative"
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
            "absolute left-0 bottom-[-2px] md:bottom-0 w-full md:top-0 h-[60%] md:h-full md:max-w-[50%] project-home-blur transition_common " +
              // md+ screens: slide in from left
              "md:-translate-x-full md:group-hover:translate-x-0 translate-x-0 translate-y-0"
          )}
        >
          <div className="pr-7 pl-5 pb-6 pt-6 md:pr-12 md:pl-10 md:pt-12 md:pb-12 h-full flex flex-col justify-between gap-6">
            <Image
              src={images.netroLogo}
              alt={item?.title}
              className="h-auto w-10 md:w-12 lg:w-14"
              height={200}
              width={300}
            />

            <div className="flex flex-col">
              <p className="text-text-50 font-bold font-scoutcond text-[20px] md:text-[30px] leading-4 md:leading-8 line-clamp-1">
                {item?.title}
              </p>
              <p className="text-xs sm:text-base font-normal !leading-[1.4] text-text-200 mt-2 font-inter line-clamp-2">
                {item?.metaDescription}
              </p>
              <p
                className={cn(
                  "text-[10px] md:text-xs font-normal !leading-[1.6] text-text-200 font-inter"
                )}
              >
                {item?.tagList}
              </p>

              <Link href={item?.url ? item?.url : `/portfolio/${item?.title}`}>
                <Button className="w-fit group mt-4">
                  <span className="!leading-none text-xs md:text-base">
                    See Details
                  </span>
                  <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherProductCard;
