"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  item,
  className = "",
  showBottom = false,
  style = {},
}: {
  item: any;
  className?: string;
  showBottom?: boolean;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "w-full h-[728px] max-h-[728px] md:h-[640px] md:max-h-[640px] lg:h-[740px] lg:max-h-[740px] overflow-hidden bg-text-700 group transition_common relative",
        className
      )}
      style={style}
    >
      <Image
        src={item?.featuredImage}
        alt={item?.title}
        className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
        width={1920}
        height={1280}
      />

      <div
        className={cn(
          "min-w-full md:min-w-0 absolute left-0 transition_common mt-auto",
          showBottom
            ? "min-w-full bottom-0 h-max bg-blandGradient backdrop-blur-md"
            : "project-home-blur md:-translate-x-full group-hover:translate-x-0 bottom-0 md:bottom-auto md:top-0 h-max md:h-full max-w-[320px]"
        )}
      >
        <div className="p-6 md:p-8 h-full flex flex-col justify-between gap-6">
          <div className="flex flex-col">
            <Image
              src={item?.author?.profileImage}
              alt={item?.title}
              className="h-auto w-20"
              height={200}
              width={300}
            />

            <p
              className={cn(
                "text-sm sm:text-base font-normal !leading-[1.4] text-text-200 mt-4 sm:mt-5 md:mt-7 font-inter line-clamp-5"
              )}
            >
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

            <Link href={`/portfolio/${item?.title}`}>
              <Button className="w-fit group mt-4 sm:mt-6 md:mt-12">
                <span className="!leading-none">View Case</span>
                <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
