"use client";

import { StaticImageData } from "next/image";
import { useMemo } from "react";
import PortfolioPageLoader from "./PortfolioPageLoader";

interface PortfolioPageWrapperProps {
  portfolio: any;
  children: React.ReactNode;
}

const PortfolioPageWrapper = ({ portfolio, children }: PortfolioPageWrapperProps) => {
  // Memoize image collection to avoid recalculation on re-renders
  const imageSources = useMemo(() => {
    const sources: (StaticImageData | string)[] = [
      portfolio.topImage,
      portfolio.featuredImage,
      portfolio.thumbnail,
      portfolio.backgroundImage,
      portfolio.solutionImage,
      portfolio.problemIdentificationImage,
      ...(portfolio.descriptionImages || []),
      ...(portfolio.brandingImages || []),
      ...(portfolio.wireframeImages || []),
      ...(portfolio.wireframeGridImages || []),
      ...(portfolio.projectImages || []),
      portfolio.card1?.backgroundImage,
      portfolio.card2?.backgroundImage,
      portfolio.card3?.backgroundImage,
      portfolio.card4?.backgroundImage,
      portfolio.card5?.backgroundImage,
    ].filter(Boolean) as (StaticImageData | string)[];

    return sources;
  }, [portfolio]);

  return (
    <PortfolioPageLoader imageSources={imageSources}>
      {children}
    </PortfolioPageLoader>
  );
};

export default PortfolioPageWrapper;
