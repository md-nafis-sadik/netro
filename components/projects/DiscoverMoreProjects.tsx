"use client";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "../common/SectionHeader";
import Autoplay from "embla-carousel-autoplay";
import OtherProductCard from "../products/OtherProductsCard";
import DescriptionHeader from "../common/DescriptionHeader";

const DiscoverMoreProjects = ({ data }: any) => {
  // const options = { align: "start", loop: false } as const;
  // const [emblaRef] = useEmblaCarousel(options, [
  //   Autoplay({ delay: 3000, stopOnInteraction: false }),
  // ]);

  return (
    <section className="w-full p-12 md:p-24 lg:p-32 relative bg-darkPurplebg">
      <DescriptionHeader title="Releted Works" className="mb-6 md:mb-8 lg:mb-10" />

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
