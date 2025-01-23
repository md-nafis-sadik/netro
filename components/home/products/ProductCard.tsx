import { scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface IFProductCardProps {
  name: string;
  description: string;
}

const ProductCard = ({ name, description }: IFProductCardProps) => {
  return (
    <div className="relative w-full">
      <div className="w-full h-auto aspect-[0.74/1] bg-white"></div>

      <p
        className={cn(
          scoutCond.className,
          "text-2xl md:text-[32px] !leading-none font-bold text-white uppercase mt-3 md:mt-4"
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
