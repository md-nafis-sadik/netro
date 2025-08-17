import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import { GradientButton } from "../ui/gradient-button";

interface IFProductCardProps {
  name: string;
  description: string;
  image?: StaticImageData;
  url?: string;
  detailsUrl?: string;
}

const ProductCard = ({
  name,
  description,
  image,
  url,
  detailsUrl,
}: IFProductCardProps) => {
  return (
    <div className="relative w-full cursor-pointer select-none group">
      <div className="w-full h-auto min-h-[228px] relative">
        {image && (
          <Image
            src={image}
            alt={name}
            className="absolute_center object-cover h-auto min-w-full max-h-[228px]"
            height={1280}
            width={1920}
          />
        )}
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

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          className=" bg-main-400 hover:bg-main-500 flex items-center gap-2 p-[12px_20px_12px_24px] py-2 rounded-full w-fit text-white font-inter text-sm md:text-base font-bold !leading-[1.1]"
          href={detailsUrl ? detailsUrl : url}
          {...(!detailsUrl && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {detailsUrl ? <span>See Details</span> : <span>Download App</span>}
          <ArrowLongTailIcon className="text-white-100" />
        </a>
        
      </div>
    </div>
  );
};

export default ProductCard;
