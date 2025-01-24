import { Button } from "@/components/ui/button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface IFProjectCard {
  name: string;
  bgImage: StaticImageData;
  top: number;
  index: number;
  description: string;
  tagList: string;
  icon: StaticImageData;
}

const ProjectCard: FC<IFProjectCard> = ({
  name,
  bgImage,
  description,
  tagList,
  top,
  index,
  icon,
}) => {
  return (
    <div
      className={cn(
        "w-full sticky left-0 h-[450px] max-h-[450px] md:h-[640px] md:max-h-[640px] overflow-hidden bg-text-700 group transition_common cursor-pointer"
      )}
      style={{ top: `${top}px` }}
    >
      <Image
        src={bgImage}
        alt={name}
        className="min-h-full min-w-full absolute_center"
        width={1920}
        height={1280}
      />

      <div className="project-home-blur h-full w-[320px] absolute left-[-100%] top-0 group-hover:left-0 transition_common flex flex-col justify-between gap-[50px] p-7 md:p-8">
        <div className="flex flex-col">
          <Image
            src={icon}
            alt={name}
            className="h-auto w-[112px]"
            height={200}
            width={300}
          />

          <p
            className={cn(
              inter.className,
              "text-base font-normal !leading-[1.4] text-text-200 mt-7"
            )}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-col">
          <p
            className={cn(
              inter.className,
              "text-[10px] md:text-xs font-normal !leading-[1.6] text-text-200"
            )}
          >
            {tagList}
          </p>

          <Button className="w-fit group mt-4 md:mt-12">
            <span className="!leading-none">Join our team</span>
            <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
