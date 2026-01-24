import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useProductAnimation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      /* ---------- Product Rows ---------- */
      gsap.utils.toArray<HTMLElement>(".product-item").forEach((item, i) => {
        const isEven = i % 2 === 1;

        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            x: isEven ? 60 : -60,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        );

        /* Image animation */
        gsap.fromTo(
          item.querySelector(".product-image"),
          { scale: 0.96 },
          {
            scale: 1,
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        );

        /* Text stagger */
        gsap.fromTo(
          item.querySelectorAll(".product-text > *"),
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
  };
};
