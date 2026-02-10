"use client";

import OtherProductCard from "../products/OtherProductsCard";
import DescriptionHeader from "../common/DescriptionHeader";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServicesOfferProps {
  title?: string;
  description?: string;
  data: any[];
}

const ServicesOffer = ({
  title = "What we offer",
  description = "Unified engineering for the AI era. From strategy and prototyping to production-grade rollouts, we help organizations:",
  data,
}: ServicesOfferProps) => {
  const sectionRef = useAppearanceAnimation(".animate-item4", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.1,
  });

  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section ref={sectionRef}>
      <div className="container pb-8 md:pb-12 lg:pb-20 overflow-hidden">
        <DescriptionHeader
          title={title}
          text={description}
          descriptionClassName="max-w-full"
        />
        <div className="w-full overflow-hidden mt-10">
          <div className="w-full" ref={emblaRef}>
            <div className="w-full min-h-fit flex flex-row gap-4 md:gap-6">
              {data?.map((item: any, index: number) => (
                <div
                  className={cn(
                    "w-full min-w-[100%] sm:min-w-[376px] aspect-[376/460] overflow-hidden bg-neutral-50 group relative animate-item4 rounded-2xl md:rounded-3xl",
                  )}
                  key={index}
                >
                  <Image
                    src={item?.featuredImage}
                    alt={item?.title || "Project"}
                    className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
                    width={1920}
                    height={1280}
                  />

                  {(item?.desc || item?.title) && (
                    <div
                      className={cn(
                        "absolute left-0 bottom-0 w-full h-[45%] xl:h-[40%] md:max-w-full project-home-blur transition_common ",
                      )}
                    >
                      <div className="pr-6 pl-4 pb-4 pt-5 md:pr-14 md:pl-6 md:pt-12 md:pb-6 h-full flex flex-col justify-between gap-4 md:gap-6">
                        <div className="flex flex-col mt-auto">
                          <p className="text-base md:text-lg 2xl:text-2xl font-bold !leading-[1.1] text-white mt-3 font-inter line-clamp-2">
                            {item?.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
