import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface IFTeamCardProps {
  image: StaticImageData;
  name: string;
  position: string;
  className?: string;
}

const TeamCard = ({ image, name, position, className }: IFTeamCardProps) => {
  return (
    <div className={cn("w-full h-full select-none group", className)}>
      <Image
        src={image}
        alt={name}
        className="w-full aspect-[400/450] object-cover object-top rounded-xl lg:rounded-2xl"
        width={800}
        height={900}
      />

      <div className="mt-2 sm:mt-3 lg:mt-5">
        <div
          className="relative flex flex-col gap-2 h-full w-full border-b border-[#3A3B3F] pb-2 sm:pb-4 lg:pb-6 
          after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
          after:bg-[#7FFBAF]
          after:scale-x-0 after:origin-left
          after:transition-transform after:duration-700 after:ease-in-out
          group-hover:after:scale-x-100"
        >
          <p
            className={cn(
              "text-xs sm:text-sm md:text-lg lg:text-2xl font-bold !leading-normal text-white capitalize font-inter",
            )}
          >
            {name}
          </p>
          <p
            className={cn(
              "text-[8px] sm:text-sm md:text-base font-normal !leading-normal text-gray-300 font-inter",
            )}
          >
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
