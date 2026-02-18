import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useStaggerReveal } from "./useAnimation";

export const useProcessAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  useStaggerReveal(cardsRef, { once: false });

  /* ---------- IMAGE CHANGE ANIMATION ---------- */
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }, [activeIndex]);

  /* ---------- HOVER ANIMATION ---------- */
  const handleHover = (index: number, el: HTMLDivElement) => {
    // Only update if different from current active index
    if (activeIndex !== index) {
      setActiveIndex(index);
    }

    gsap.to(el, {
      y: -6,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(el.querySelector(".process-icon"), {
      scale: 1.15,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  };

  const handleLeave = (el: HTMLDivElement) => {
    gsap.to(el, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(el.querySelector(".process-icon"), {
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
    setActiveIndex(0);
  };

  return {
    cardsRef,
    imageRef,
    handleHover,
    handleLeave,
    activeIndex,
  };
};
