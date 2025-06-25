import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CardTransitionUp from "../animations/CardTransitionUpWithDelay";

interface IFCardProps {
  image: StaticImageData;
  index: number;
  title: string;
  link: string;
  date: string;
  imageContainerClassName?: string;
  className?: string;
  titleClassName?: string;
  contentContainerClassName?: string;
}

const JournalCard = ({
  image,
  index,
  title,
  link,
  date,
  imageContainerClassName,
  className,
  titleClassName,
  contentContainerClassName,
}: IFCardProps) => {
  return (
    <CardTransitionUp index={index} className={cn("w-full group", className)}>
      <div
        className={cn(
          "h-[196px] md:h-[308px] w-full relative overflow-hidden min-w-[260px] md:min-w-[400px]",
          imageContainerClassName
        )}
      >
        <Image
          src={image}
          alt="Blog 1"
          className="min-w-full min-h-full object-cover absolute_center transition_common group-hover:scale-105"
          width={1280}
          height={1280}
        />
      </div>

      <Link
        href={link}
        className={cn("block pt-4 md:pt-6 w-full", contentContainerClassName)}
      >
        <p
          className={cn(
            "text-lg md:text-2xl !leading-normal md:!leading-[1.16] font-bold text-natural-700 font-inter",
            titleClassName
          )}
        >
          {title}
        </p>

        <p
          className={cn(
            "text-sm font-normal !leading-[1.1] text-natural-700 mt-2 md:mt-3 font-inter"
          )}
        >
          {date}
        </p>
      </Link>
    </CardTransitionUp>
  );
};

export default JournalCard;
