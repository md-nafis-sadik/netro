"use client";
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import {
  LeftSignIcon,
  QuoteStraightIcon,
  RightSignIcon,
} from "@/services/assets/svgs";
import Autoplay from "embla-carousel-autoplay";
import SectionHeader from "../common/SectionHeader";

const Testimonial = ({ data }: any) => {
  const autoplayOptions = { delay: 3000 };
  const options = { align: "start", loop: true } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);

  return (
    <div className="containerX w-full py-20 md:py-[120px] relative overflow-x-hidden">
      <div className="w-fit relative mx-auto h-fit">
        <SectionHeader className="home_testimonial_header">
          See How We&apos;ve Made <br /> a Difference
        </SectionHeader>

        <QuoteStraightIcon className="absolute -top-[20%] -right-[14%] w-[20%] z-[-1] h-auto !shrink-0" />
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-x-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex gap-3 md:gap-6 lg:gap-8 w-full">
            {data?.map((item: any, index: number) => (
              <TestimonialCard
                key={index}
                name={item?.name}
                title={item?.occupation}
                avatar={item?.imageUrl}
                message={item?.review}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex_center gap-8 mt-10 md:mt-[60px]">
        <button
          aria-label="move left button"
          className={cn(
            "btn bg-white transition-all duration-300 h-10 md:h-[60px] w-10 md:w-[60px] border border-natural-300 hover:bg-main-500 group rounded-full flex_center"
          )}
          onClick={onPrevButtonClick}
        >
          <LeftSignIcon
            className="h-6 w-6 md:h-[32px] md:w-[32px] group-hover:text-white"
            color={"currentColor"}
          />
        </button>
        <button
          aria-label="move right button"
          className={cn(
            "btn bg-white transition-all duration-300 h-10 md:h-[60px] w-10 md:w-[60px] border border-natural-300 hover:bg-main-500 group rounded-full flex_center "
          )}
          onClick={onNextButtonClick}
        >
          <RightSignIcon
            className="h-6 w-6 md:h-[32px] md:w-[32px] group-hover:text-white"
            color={"currentColor"}
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
