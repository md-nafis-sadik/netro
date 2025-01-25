import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IFCardProps {
  image: StaticImageData;
  title: string;
  link: string;
  date: string;
}

const JournalCard = ({ image, title, link, date }: IFCardProps) => {
  return (
    <div className="w-full group">
      <div className="h-[196px] md:h-[308px] w-full relative overflow-hidden min-w-[260px] md:min-w-[400px]">
        <Image
          src={image}
          alt="Blog 1"
          className="min-w-full min-h-full object-cover absolute_center transition_common group-hover:scale-105"
          width={1280}
          height={1280}
        />
      </div>

      <Link href={link} className="block pt-4 md:pt-6 w-full">
        <p
          className={cn(
            inter.className,
            "text-lg md:text-2xl !leading-normal md:!leading-[1.16] font-bold text-natural-700"
          )}
        >
          {title}
        </p>

        <p
          className={cn(
            inter.className,
            "text-sm font-normal !leading-[1.1] text-natural-700 mt-2 md:mt-3"
          )}
        >
          {date}
        </p>
      </Link>
    </div>
  );
};

export default JournalCard;
