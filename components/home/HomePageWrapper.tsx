"use client";

import { StaticImageData } from "next/image";
import { useMemo } from "react";
import HomePageLoader from "./HomePageLoader";
import { portfolios } from "@/services/data/portfolio.data";
import { images } from "@/services/assets";
import { bannerIcons, homeIntroData } from "@/services/data/home.data";
import { projects } from "@/services/data/project.data";
import { servicesData } from "@/services/data/services.data";
import { productsData } from "@/services/data/product.data";
import { teamData } from "@/services/data/team.data";
import { awardsBgDown, awardsBgUp } from "@/services/assets/images";
import { countries } from "@/services/data/countries";

interface HomePageWrapperProps {
  children: React.ReactNode;
}

const HomePageWrapper = ({ children }: HomePageWrapperProps) => {
  // Memoize image collection to avoid recalculation on re-renders
  const imageSources = useMemo(() => {
    const sources: (StaticImageData | string)[] = [
      // Core brand images
      images.netroLogo,
      images.avatar,
      images.banner,
      images.ratingClutch,
      images.ratingTrustpilot,
      images.ratingGoodFirms,
      
      // Support avatars
      // images.support1,
      // images.support2,
      // images.support3,
      
      // About/intro images
      // images.about1,
      // images.about2,
      // images.about3,
      // images.about4,
      // images.about5,
      
      // Hero banner icons
      // ...bannerIcons.map(item => item.icon),
      
      // Intro home images
      // ...homeIntroData.map(item => item.image),
      
      // Country flags
      // ...countries.map(c => c.image),
      
      // Projects background images
      // ...projects.map(p => p.backgroundImage),
      
      // Services images (first 5 shown on home)
      // ...servicesData.slice(0, 5).map(s => s.image),
      
      // Products images
      // ...productsData.map(p => p.image),
      
      // Team member images
      // ...teamData.map(t => t.image),
      
      // Awards background patterns
      // awardsBgUp,
      // awardsBgDown,
      
      // Portfolio images (thumbnails for home display)
      ...portfolios.slice(0, 6).map(p => p.thumbnail || p.featuredImage || p.topImage).filter(Boolean),
    ].filter(Boolean) as (StaticImageData | string)[];

    return sources;
  }, []);

  return (
    <HomePageLoader imageSources={imageSources}>
      {children}
    </HomePageLoader>
  );
};

export default HomePageWrapper;
