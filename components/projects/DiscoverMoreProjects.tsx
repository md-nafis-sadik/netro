"use client";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "../common/SectionHeader";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

const DiscoverMoreProjects = ({ data }: any) => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="w-full py-20 relative">
      <SectionHeader className="portfolio_details_header">
        Discover More Insights
      </SectionHeader>

      <div className="containerX w-full overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-10 md:py-20">
            {data?.map((item: any, index: number) => (
              <ProjectCard
                className={cn(
                  "!min-w-[380px] md:!min-w-[621px] !h-[220px] md:!h-[361px] !max-h-[361px]"
                )}
                projectDescriptionClassName={"!line-clamp-1 md:!line-clamp-5"}
                item={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMoreProjects;
