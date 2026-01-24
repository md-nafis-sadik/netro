import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const useProcessAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  /* ---------- SCROLL REVEAL ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-sub, .process-title",
        { autoAlpha: 0, y: 24, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".process-card",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------- IMAGE CHANGE ANIMATION ---------- */
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, y: 16 },
      {
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  }, [activeIndex]);

  /* ---------- HOVER ANIMATION ---------- */
  const handleHover = (index: number, el: HTMLDivElement) => {
    setActiveIndex(index);

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
    sectionRef,
    imageRef,
    handleHover,
    handleLeave,
    activeIndex,
  };
};
