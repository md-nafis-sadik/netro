import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { RightArrowIcon } from "@/services/assets/svgs";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { JSX } from "react";

interface IFImageComponent {
  src: StaticImageData;
  alt: string;
  className?: string;
}

interface IFServiceCard {
  title: string;
  text: string;
  imageComponent: IFImageComponent;
  link: string;
}

const ServiceCard = ({ title, text, imageComponent, link }: IFServiceCard) => {
  return (
    <div className="min-h-[394px] min-w-[394px] relative bg-black py-6 md:py-10 px-4 md:px-10">
      <Image
        src={imageComponent.src}
        alt={imageComponent.alt}
        className={imageComponent.className}
      />

      <p
        className={cn(
          scoutCond.className,
          "text-[32px] md:text-[62px] font-bold !leading-[1.04] uppercase text-white whitespace-pre-wrap"
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          inter.className,
          "text-white text-base md:text-lg font-medium mt-3 mb-10 md:mb-20"
        )}
      >
        {text}
      </p>

      <Link href={link} className="group">
        <RightArrowIcon className="animation_common group-hover:translate-x-3 h-10 w-10" />
      </Link>
    </div>
  );
};

export default ServiceCard;
