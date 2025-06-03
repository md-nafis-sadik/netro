import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface IFProductCardProps {
  name: string;
  description: string;
  image?: StaticImageData;
  url?: string;
}

const ProductCard = ({ name, description, image, url }: IFProductCardProps) => {
  return (
    <div className="relative w-full cursor-pointer select-none group">
      <div className="w-full h-auto aspect-[0.74/1] bg-white relative">
        {image && (
          <Image
            src={image}
            alt={name}
            className="absolute_center object-cover min-h-full min-w-full"
            height={1280}
            width={1920}
          />
        )}
        <div className="absolute_center bg-main-400/50 h-[100px] w-[100px] md:h-[140px] md:w-[140px] rounded-full transition_common duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 flex_center">
          <p
            className={cn(
              "text-lg md:text-2xl font-bold !leading-none uppercase text-white text-center font-scoutcond"
            )}
          >
            View <br /> Details
          </p>
        </div>
      </div>

      <p
        className={cn(
          "text-2xl md:text-[32px] !leading-none font-bold text-white uppercase mt-3 md:mt-4 font-scoutcond"
        )}
      >
        {name}
      </p>

      <p
        className={cn(
          "text-sm md:text-lg font-normal !leading-[1.6] md:!leading-[1.4] text-text-200 mt-[6px] md:mt-2"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default ProductCard;
