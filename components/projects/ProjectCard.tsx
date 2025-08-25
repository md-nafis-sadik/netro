"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProjectCard = ({
  item,
  className = "",
  projectDescriptionClassName = "",
  showBottom = false,
  style = {},
  leftSlideClass = "",
  linkCondition,
}: {
  item: any;
  className?: string;
  projectDescriptionClassName?: string;
  showBottom?: boolean;
  style?: React.CSSProperties;
  leftSlideClass?: string;
  linkCondition?: string;
}) => {
  const router = useRouter();

  const isLink = linkCondition === "portfolio";

  return (
    <div
    onClick={isLink ? () => router.push(`/portfolio/${item?.title}`) : undefined}
      className={cn(
        "w-full aspect-[82/115] lg:aspect-[31/18] overflow-hidden bg-text-700 group transition_common",
        className,
        isLink ? "cursor-pointer" : ""
      )}
      style={style}
    >
      <Image
        src={item?.featuredImage}
        alt={item?.title || "Project"}
        className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
        width={3840}
        height={2560}
        {...(item?.blurDataURL
          ? { placeholder: "blur", blurDataURL: item.blurDataURL }
          : {})}
      />

      {/* Doing a check if any of the fields are available only then itll be shown otherwise wont! */}
      {(item?.author ||
        item?.metaDescription ||
        item?.tagList ||
        item?.title) && (
        <div
          className={cn(
            "min-w-full md:min-w-0 absolute left-0 transition_common mt-auto",
            showBottom
              ? "min-w-full bottom-0 h-max bg-blandGradient backdrop-blur-md"
              : "project-home-blur md:-translate-x-full group-hover:translate-x-0 bottom-0 md:bottom-auto md:top-0 h-max md:h-full max-w-[320px]",
            leftSlideClass
          )}
        >
          <div className="p-6 md:p-8 h-full flex flex-col justify-between gap-6">
            <div className="flex flex-col">
              <Image
                src={item?.author?.profileImage}
                alt={item?.title}
                className="h-auto w-10 md:w-12 lg:w-14 xl:w-20"
                height={200}
                width={300}
                {...(item?.author?.blurDataURL
                  ? { placeholder: "blur", blurDataURL: item.author.blurDataURL }
                  : {})}
              />

              <p
                className={cn(
                  "text-sm xl:text-base font-normal !leading-[1.4] text-text-200 mt-4 sm:mt-4 xl:mt-6 font-inter line-clamp-3",
                  projectDescriptionClassName
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
                <Button className="w-fit group mt-4 sm:mt-5">
                  <span className="!leading-none text-sm xl:text-base">
                    View Project
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

export default ProjectCard;
