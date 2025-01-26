import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface IFTestimonialCard {
  message: string;
  avatar: StaticImageData;
  name: string;
  title: string;
}

const TestimonialCard = ({
  message,
  avatar,
  name,
  title,
}: IFTestimonialCard) => {
  return (
    <div className="flex_center flex-col mt-10 md:mt-20 min-w-full select-none">
      <p
        className={cn(
          "text-sm md:text-lg uppercase !leading-[1.6] font-normal text-center max-w-[1000px]"
        )}
      >
        {message}
      </p>

      <div className="flex flex-row gap-3 items-center mt-6">
        <Image
          src={avatar}
          alt="avatar"
          className="w-[52px] md:w-[60px] h-[52px] md:h-[60px]"
          width={500}
          height={500}
        />

        <div className="flex flex-col">
          <p
            className={cn(
              "text-[28px] md:text-[32px] font-bold !leading-normal text-text-900 tracking-[0.84px] md:tracking-[0.96px] uppercase font-scout-cond"
            )}
          >
            {name}
          </p>

          <p
            className={cn(
              "text-sm md:text-base font-normal !leading-normal text-text-600 font-inter"
            )}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
