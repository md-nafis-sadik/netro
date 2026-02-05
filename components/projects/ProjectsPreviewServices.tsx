"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import OtherProductCard from "../products/OtherProductsCard";
import { Fragment } from "react";

const ProjectsPreviewServices = ({ data }: any) => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <Fragment>
      {/* {data?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mt-10 md:mt-10">
          {data?.slice(0, 5)?.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              item={item}
              shrinkedInGrid={(index + 1) % 3 !== 0}
              className={cn(
                "relative bg-transparent",
                (index + 1) % 3 === 0 ? "md:col-span-2" : ""
              )}
            />
          ))}
        </div>
      ) : (
        <div className="py-40">
          <p className="font-inter text-center text-2xl font-semibold">
            No work available for this segment.
          </p>
        </div>
      )} */}

      <div className="container w-full overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10">
            {data?.map((item: any, index: number) => (
              <OtherProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectsPreviewServices;
