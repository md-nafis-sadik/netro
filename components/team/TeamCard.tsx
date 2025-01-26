import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface IFTeamCardProps {
  image: StaticImageData;
  name: string;
  position: string;
  socials: {
    type: string;
    link: string;
    icon: React.ReactNode;
  }[];
}

const TeamCard = ({ image, name, position, socials }: IFTeamCardProps) => {
  return (
    <div className="min-h-[298px] min-w-[224px] md:min-h-[400px] md:min-w-[300px] bg-black relative select-none cursor-grab active:cursor-grabbing">
      <Image
        src={image}
        alt={name}
        className="min-w-full min-h-full absolute_center"
        width={1024}
        height={1280}
      />

      <div className="absolute h-full w-full bg-gradient-to-br from-[rgba(26,23,55,0.27)] via-[rgba(15,11,45,0.5)] to-[rgba(1,0,9,0.5)] backdrop-blur-md px-4 md:px-7 py-4 md:py-5 transition_common opacity-0 hover:opacity-100 group">
        <div className="flex flex-col justify-between h-full w-full">
          <div className="transition_common -translate-y-5 group-hover:translate-y-0">
            <p
              className={cn(
                "text-sm md:text-lg font-bold !leading-normal text-white capitalize font-inter"
              )}
            >
              {name}
            </p>
            <p
              className={cn(
                "text-[8px] md:text-[10px] font-normal !leading-normal text-white font-inter"
              )}
            >
              {position}
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            {socials.map(({ type, link, icon }, index) => (
              <a
                key={index}
                href={link}
                aria-label={type}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition_common h-[26px] w-[26px] md:h-9 md:w-9 flex_center bg-white rounded-full transition_common translate-y-5 group-hover:translate-y-0"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
