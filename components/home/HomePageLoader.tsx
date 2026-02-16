"use client";

import { useEffect, useState, useCallback } from "react";
import { StaticImageData } from "next/image";
import Loading from "@/app/loading";

interface HomePageLoaderProps {
  children: React.ReactNode;
  imageSources: (StaticImageData | string)[];
}

const HomePageLoader = ({ children, imageSources }: HomePageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = useCallback((src: StaticImageData | string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      
      const handleLoad = () => resolve();
      const handleError = () => resolve(); // Still resolve on error to prevent hanging
      
      img.onload = handleLoad;
      img.onerror = handleError;

      // Extract src string from StaticImageData or use string directly
      const srcString = typeof src === 'string' ? src : src?.src;
      if (srcString) {
        img.src = srcString;
      } else {
        resolve();
      }
    });
  }, []);

  useEffect(() => {
    if (imageSources.length === 0) {
      setIsLoading(false);
      return;
    }

    // Load all images in parallel
    Promise.all(imageSources.map(loadImage))
      .then(() => {
        // Small delay for smooth transition
        setTimeout(() => setIsLoading(false), 0);
      });
  }, [imageSources, loadImage]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default HomePageLoader;
