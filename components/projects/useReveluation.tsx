import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useReveluation = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Video zoom in effect
      gsap.fromTo(
        videoRef.current,
        {
          scale: 1.3,
          autoAlpha: 0,
        },
        {
          scale: 1,
          autoAlpha: 0.5,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Header animation - split by lines
      const headerLines = document.querySelectorAll(".home_ai_header");
      gsap.fromTo(
        headerLines,
        {
          autoAlpha: 0,
          y: 80,
          rotateX: -45,
          transformOrigin: "center top",
        },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".home_ai_header",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Paragraph fade and slide up
      gsap.fromTo(
        ".revolution-description",
        {
          autoAlpha: 0,
          y: 40,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".revolution-description",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Button animation with scale and glow effect
      gsap.fromTo(
        ".revolution-button",
        {
          autoAlpha: 0,
          scale: 0.8,
          y: 30,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".revolution-button",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Button hover animation
      const button = document.querySelector(".revolution-button");
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(".ai-icon-wrapper", {
            rotation: 360,
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(".ai-icon-wrapper", {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    videoRef,
  };
};
