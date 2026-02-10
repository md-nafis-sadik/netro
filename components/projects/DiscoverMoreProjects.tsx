"use client";

import OtherProductCard from "../products/OtherProductsCard";
import DescriptionHeader from "../common/DescriptionHeader";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const DiscoverMoreProjects = ({ data }: any) => {
  const sectionRef = useAppearanceAnimation(".animate-item3", {
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
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 relative bg-darkPurplebg"
    >
      <DescriptionHeader
        title="Releted Works"
        className="mb-6 md:mb-8 lg:mb-10"
      />

      <div className="container w-full overflow-hidden">
        <div className="w-full"  ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-4 md:gap-6">
            {data?.map((item: any, index: number) => (
              <OtherProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMoreProjects;
