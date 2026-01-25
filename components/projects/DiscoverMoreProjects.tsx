"use client";

import OtherProductCard from "../products/OtherProductsCard";
import DescriptionHeader from "../common/DescriptionHeader";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";

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
        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
