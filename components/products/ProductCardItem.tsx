import { cn } from "@/lib/utils";
import { images } from "@/services";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ProductCardItem({
  item,
  titleClass,
  descriptionClass,
  className = "",
  wrapper = "",
}: {
  item: {
    _id?: string;
    name?: string;
    description?: string;
    imageUrl?: StaticImageData;
    tags?: string[];
  };
  titleClass?: string;
  descriptionClass?: string;
  className?: string;
  wrapper?: string;
}) {
  return (
    <Link
      href={`/products/${item?._id}`}
      className={cn("w-full group", className)}
    >
      <div
        className={cn(
          "h-[438px] sm:h-[500px] md:h-[552px] relative cursor-pointer select-none",
          wrapper
        )}
      >
        <Image
          src={item?.imageUrl || images.blog1}
          alt="product"
          width={800}
          height={800}
          className="w-fit h-full object-fill"
        />
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
          "text-2xl md:text-[32px] !leading-none font-bold text-text-900 uppercase mt-3 md:mt-4 font-scoutcond",
          titleClass
        )}
      >
        {item?.name}
      </p>

      <p
        className={cn(
          "text-sm md:text-lg font-normal !leading-[1.6] md:!leading-[1.4] text-text-600 mt-[6px] md:mt-2",
          descriptionClass
        )}
      >
        {item?.description}
      </p>
    </Link>
  );
}

export default ProductCardItem;
