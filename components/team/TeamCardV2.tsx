import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface IFTeamCardProps {
  image: StaticImageData;
  name: string;
  position: string;
}

const TeamCardV2 = ({ image, name, position }: IFTeamCardProps) => {
  return (
    <div className="w-full h-full select-none group">
      <Image
        src={image}
        alt={name}
        className="w-full aspect-[382/450] object-cover object-top p-1"
        width={382}
        height={450}
      />

      <div className="mt-5">
        <div
          className="relative flex flex-col gap-2 h-full w-full border-b border-[#3A3B3F] pb-6 
          after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
          after:bg-[#7FFBAF]
          after:scale-x-0 after:origin-left
          after:transition-transform after:duration-700 after:ease-in-out
          group-hover:after:scale-x-100"
        >
          <p
            className={cn(
              "text-lg md:text-2xl font-bold !leading-normal text-white capitalize font-inter",
            )}
          >
            {name}
          </p>
          <p
            className={cn(
              "text-sm md:text-base font-normal !leading-normal text-gray-300 font-inter",
            )}
          >
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCardV2;
