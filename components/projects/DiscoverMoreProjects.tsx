"use client";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "../common/SectionHeader";
import Autoplay from "embla-carousel-autoplay";

const DiscoverMoreProjects = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="w-full py-20 relative">
      <SectionHeader className="home_projects_header pb-10 md:pb-28">
        Discover More Insights
      </SectionHeader>
    </section>
  );
};

export default DiscoverMoreProjects;
