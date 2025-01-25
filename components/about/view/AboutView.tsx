"use client";
import { cn } from "@/lib/utils";
import { aboutViewData } from "@/services/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const AboutView = () => {
  const [centeredIndex, setCenteredIndex] = useState<number>(0);
  const autoplayOptions = { delay: 3000 };
  const options = { align: "start", loop: false } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  // center slide

  // Function to update the centered item index
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap(); // Get the index of the centered item
    setCenteredIndex(window.innerWidth >= 1280 ? index + 1 : index);
  }, [emblaApi]);

  // event listener to update centered index whenever carousel changes
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial centered index
  }, [emblaApi, onSelect]);

  return (
    <section className="containerX overflow-hidden">
      <div className="mx-auto min-h-[704px]">
        <div className="" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 pt-10">
            {aboutViewData.map(({ image, title, description }, index) => (
              <div
                className={cn(
                  centeredIndex === index
                    ? "h-[234px] md:h-[544px] -translate-y-[11%]"
                    : "h-[186px] md:h-[434px]",
                  "min-w-[33%] relative overflow-hidden transition_common bg-pink-500"
                )}
              >
                <Image
                  src={image}
                  alt={title}
                  aria-label={description}
                  width={1280}
                  height={1280}
                  className="min-w-full min-h-full absolute_center w-[700px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        className={cn(
          "text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900 my-10 md:mt-20 md:mb-[120px]"
        )}
      >
        Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture.
      </p>
    </section>
  );
};

export default AboutView;
