"use client";

import { IService } from "@/services/types";
import ServicePageLoader from "./ServicePageLoader";
import { StaticImageData } from "next/image";
import { useMemo } from "react";

interface ServicePageWrapperProps {
  service: IService;
  children: React.ReactNode;
}

const ServicePageWrapper = ({ service, children }: ServicePageWrapperProps) => {
  // Memoize image collection to avoid recalculation on re-renders
  const imageSources = useMemo(() => {
    const sources: (StaticImageData | string)[] = [
      service.image,
      service.featuredImage,
      ...(service.atGlance?.map(item => item.image) || []),
      ...(service.commitment?.cards.flatMap(card => [card.image, card.bg].filter(Boolean)) || []),
      ...(service.servicesOffer?.data.map(item => item.featuredImage) || []),
    ].filter(Boolean) as (StaticImageData | string)[];

    return sources;
  }, [service]);

  return (
    <ServicePageLoader imageSources={imageSources}>
      {children}
    </ServicePageLoader>
  );
};

export default ServicePageWrapper;
