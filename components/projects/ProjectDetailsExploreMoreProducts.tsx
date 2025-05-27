"use client";
import { productsData } from "@/services/data";
import ProductCard from "../products/ProductCard";
import PageThumbnail from "../shared/PageThumbnail";
import useEmblaCarousel from "embla-carousel-react";

const ProjectDetailsExploreMoreProducts = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div>
      <PageThumbnail
        title="Explore More Products"
        titleClassName="portfolio_details_explore_more_products_header w-fit !text-center"
        className="flex_center"
      />

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10">
            {productsData.map(({ name, description }, index) => (
              <ProductCard name={name} description={description} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsExploreMoreProducts;
