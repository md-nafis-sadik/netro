import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const useServiceAnimation = () => {
  const [activeService, setActiveService] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- INITIAL LOAD WITH SCROLL TRIGGER ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headers
      gsap.fromTo(
        ".services-sub, .services-title",
        { autoAlpha: 0, y: 24, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".services-sub",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Animate service items from left
      gsap.fromTo(
        ".service-item",
        { autoAlpha: 0, x: -60, scale: 0.95 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-item",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Animate service image
      gsap.fromTo(
        ".service-image",
        { autoAlpha: 0, scale: 0.9, x: 40 },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-image",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- IMAGE SMOOTH CHANGE ---------------- */
  useEffect(() => {
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
    sectionRef,
    imageRef,
    activeService,
    setActiveService,
  };
};
