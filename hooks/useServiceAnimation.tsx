import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useAnimation, useStaggerReveal } from "./useAnimation";

export const useServiceAnimation = () => {
  const [activeService, setActiveService] = useState(0);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useStaggerReveal(itemRef, {
    alpha: 0,
    x: -60,
    scale: 0.95,
  });

  useAnimation(imageRef, {
    alpha: 0,
    scale: 0.9,
    x: 40,
  });

  /* ---------------- IMAGE SMOOTH CHANGE ---------------- */
  useGSAP(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        autoAlpha: 0,
        scale: 0.98,
        y: 12,
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  }, [activeService]);
  return {
    itemRef,
    imageRef,
    activeService,
    setActiveService,
  };
};
