import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLongTailIcon } from "@/services/assets/svgs";

interface IFProductCardProps {
  item: any;
}

const OtherProductCard = ({ item }: IFProductCardProps) => {
  return (
    <div
      className={cn(
        "w-full min-w-[90%] md:min-w-[621px] aspect-[31/18]  overflow-hidden bg-text-700 group transition_common relative"
      )}
    >
      <Image
        src={item?.featuredImage}
        alt={item?.title || "Project"}
        className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
        width={1920}
        height={1280}
      />

      {/* Doing a check if any of the fields are available only then it will be shown otherwise wont! */}
      {(item?.author ||
        item?.metaDescription ||
        item?.tagList ||
        item?.title) && (
        <div className="min-w-0 absolute left-0 mt-auto product-show-blur translate-x-0 bottom-0 md:top-0 h-[51%] max-w-[74%]">
          <div className="pr-7 pl-5 pb-6 md:pr-18 md:pl-11 md:pb-12 h-full flex flex-col justify-end gap-4">
            <div className="flex flex-col">
              <p className="text-text-50 font-bold font-scoutcond text-[29px] md:text-[32px]">
                {item?.title}
              </p>

              <p className="text-xs sm:text-base font-normal !leading-[1.4] text-text-200 mt-2 font-inter line-clamp-5">
                {item?.metaDescription}
              </p>
            </div>
            <div className="flex flex-col">
              <p
                className={cn(
                  "text-[10px] md:text-xs font-normal !leading-[1.6] text-text-200 font-inter"
                )}
              >
                {item?.tagList}
              </p>

              <Link href={item?.url}>
                <Button className="w-fit group">
                  <span className="!leading-none text-sm md:text-base">See Details</span>
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
