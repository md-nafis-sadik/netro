"use client";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import { IProject } from "@/services";
import { ArrowLongTailIcon, EyeIcon } from "@/services/assets/svgs";
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
  shrinkedInGrid = false,
}: {
  item: IProject;
  className?: string;
  projectDescriptionClassName?: string;
  showBottom?: boolean;
  style?: React.CSSProperties;
  leftSlideClass?: string;
  linkCondition?: string;
  shrinkedInGrid?: boolean;
}) => {
  const router = useRouter();

  const isLink = linkCondition === "portfolio";

  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-text-700 group transition_common flex",
        className,
        isLink ? "cursor-pointer" : "",
      )}
    >
      <div className="relative">
        <Image
          src={item?.backgroundImage}
          alt={item?.name || "Project"}
          width={1280}
          height={600}
          placeholder="blur"
          className="flex-1 w-full h-full"
        />
      </div>
      <div
        className="w-full max-w-[401px] flex flex-col justify-evenly backdrop:blur-md text-white p-8 font-inter"
        style={{
          background: item?.backgroundColor,
        }}
      >
        <div>
          <h2 className="text-4xl font-black leading-[100%]">{item?.name}</h2>
          <p className="text-lg leading-[140%]">{item?.description}</p>
        </div>
        <div>
          <p className="text-xs leading-[160%] text-center">
            {item?.buttonPurpose}
          </p>
          <div className="flex_center gap-3 mt-3">
            {item?.buttons?.map((button, index) => (
              <Link
                key={index}
                href={button?.url}
                className={cn(
                  "flex-1 flex_center gap-2 py-3 rounded-full text-base font-bold leading-[110%]",
                  index === 0 ? "bg-black text-white" : "bg-white text-black",
                )}
              >
                {button.text}
                {index === 0 ? (
                  <EyeIcon className="text-white size-6" />
                ) : (
                  <ArrowLongTailIcon
                    color={colors.main[600]}
                    className="size-6"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
