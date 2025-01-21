"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import { LeftSignIcon, RightSignIcon } from "@/services/assets/svgs";
import { testimonialsData } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = () => {
  const autoplayOptions = { delay: 3000 };
  const options = { align: "start", loop: true } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);

  return (
    <div className="containerX w-full py-20 md:py-[120px]">
      <SectionHeader dark text="See How We've Made" />
      <SectionHeader dark text="a Difference" />

      {/* CAROUSEL */}
      <div className="w-full overflow-x-hidden mt-8 sm:mt-12 md:mt-16">
        <div className="w-full" ref={emblaRef}>
          <div className="flex gap-3 md:gap-6 lg:gap-8 w-full">
            {testimonialsData.map(({ name, title, avatar, id, message }) => (
              <TestimonialCard
                key={id}
                name={name}
                title={title}
                avatar={avatar}
                message={message}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex_center gap-8 mt-10 md:mt-[60px]">
        <button
          aria-label="move left button"
          className={cn(
            "btn bg-white hover:opacity-50 transition-all duration-300 h-10 md:h-[60px] w-10 md:w-[60px] border border-natural-300 rounded-full flex_center"
          )}
          onClick={onPrevButtonClick}
        >
          <LeftSignIcon className="h-6 w-6 md:h-[32px] md:w-[32px]" />
        </button>
        <button
          aria-label="move right button"
          className={cn(
            "btn bg-white hover:opacity-50 transition-all duration-300 h-10 md:h-[60px] w-10 md:w-[60px] border border-natural-300 rounded-full flex_center"
          )}
          onClick={onNextButtonClick}
        >
          <RightSignIcon className="h-6 w-6 md:h-[32px] md:w-[32px]" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
