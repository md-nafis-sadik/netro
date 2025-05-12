import { cn } from "@/lib/utils";
import { RightArrowIcon } from "@/services/assets/svgs";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  HoverCardBody,
  HoverCardContainer,
  HoverCardItem,
  HoverCardRoot,
} from "../animations/3DCard";

interface IFImageComponent {
  src: StaticImageData;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
}

interface IFServiceCard {
  title: string;
  text: string;
  imageComponent: IFImageComponent;
  link: string;
}

const ServiceHomeCard = ({
  title,
  text,
  imageComponent,
  link,
}: IFServiceCard) => {
  return (
    <HoverCardRoot>
      <HoverCardContainer className="h-[260px] md:h-[394px] min-h-[260px] md:min-h-[394px] min-w-[260px] md:min-w-[394px] relative bg-black py-6 md:py-10 px-4 md:px-10 select-none cursor-grab active:cursor-grabbing flex flex-col w-full">
        <HoverCardItem translateZ={40} className="absolute -right-4 -bottom-6">
          <Image
            src={imageComponent.src}
            alt={imageComponent.alt}
            className={cn(imageComponent.className)}
            height={imageComponent.src.height}
            width={imageComponent.src.width}
          />
        </HoverCardItem>

        {/* <div className="max-w-full"> */}
        <HoverCardItem
          translateZ={40}
          as={"p"}
          className={cn(
            "text-[32px] md:text-[62px] md:font-bold !leading-[1.04] uppercase text-white whitespace-pre-wrap font-scoutcond"
          )}
        >
          {title}
        </HoverCardItem>
        <p
          className={cn(
            "text-white text-base md:text-lg font-medium mt-3 mb-10 md:mb-20 font-inter"
          )}
        >
          {text}
        </p>
        {/* </div> */}

        <Link
          href={link}
          className="group w-fit absolute bottom-6 md:bottom-10 left-4 md:left-10"
        >
          <RightArrowIcon className="transition_common group-hover:translate-x-3 h-10 w-10" />
        </Link>
      </HoverCardContainer>
    </HoverCardRoot>
  );
};

export default ServiceHomeCard;
