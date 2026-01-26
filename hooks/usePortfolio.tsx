import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const useCarrierFlowAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  useGSAP(() => {
    const loadGSAP = async () => {
      try {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        // Desktop arrow animation + masked draw
        const desktopPath = document.querySelector(
          "#desktop-path",
        ) as SVGPathElement;
        const desktopMaskPath = document.querySelector(
          "#desktop-mask-path",
        ) as SVGPathElement;
        const desktopArrow = document.querySelector(
          "#desktop-arrow",
        ) as SVGGElement;

        if (desktopPath && desktopArrow && desktopMaskPath) {
          const pathLength = desktopPath.getTotalLength();
          const desktopDash =
            desktopPath.getAttribute("stroke-dasharray") || "8 8";

          // Animate mask to reveal dashed stroke (keeps dash visible during draw)
          gsap.fromTo(
            desktopMaskPath,
            {
              strokeDasharray: `${pathLength} ${pathLength}`,
              strokeDashoffset: pathLength,
            },
            {
              strokeDashoffset: 0,
              duration: 1.8,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
              },
              onComplete: () => {
                gsap.set(desktopMaskPath, {
                  strokeDasharray: desktopDash,
                  strokeDashoffset: 0,
                });
              },
            },
          );

          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self: any) => {
                  const progress = self.progress;
                  const point = desktopPath.getPointAtLength(
                    progress * pathLength,
                  );
                  const nextPoint = desktopPath.getPointAtLength(
                    Math.min(progress * pathLength + 2, pathLength),
                  );

                  // Detect scroll direction
                  const currentScrollY = window.scrollY;
                  const isScrollingDown = currentScrollY > lastScrollY.current;
                  lastScrollY.current = currentScrollY;

                  const angle =
                    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                    (180 / Math.PI);
                  // Flip arrow based on scroll direction
                  const adjustedAngle = !isScrollingDown ? angle : angle + 180;

                  gsap.set(desktopArrow, {
                    x: point.x - 327,
                    y: point.y - 188,
                    rotation: adjustedAngle,
                    transformOrigin: "center center",
                  });
                },
              },
            },
          );
        }

        // Mobile arrow animation + masked draw
        const mobilePath = document.querySelector(
          "#mobile-path",
        ) as SVGPathElement;
        const mobileMaskPath = document.querySelector(
          "#mobile-mask-path",
        ) as SVGPathElement;
        const mobileArrow = document.querySelector(
          "#mobile-arrow",
        ) as SVGGElement;

        if (mobilePath && mobileArrow && mobileMaskPath) {
          const pathLength = mobilePath.getTotalLength();
          const mobileDash =
            mobilePath.getAttribute("stroke-dasharray") || "8 8";

          // Animate mask to reveal dashed stroke (keeps dash visible during draw)
          gsap.fromTo(
            mobileMaskPath,
            {
              strokeDasharray: `${pathLength} ${pathLength}`,
              strokeDashoffset: pathLength,
            },
            {
              strokeDashoffset: 0,
              duration: 1.8,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
              },
              onComplete: () => {
                gsap.set(mobileMaskPath, {
                  strokeDasharray: mobileDash,
                  strokeDashoffset: 0,
                });
              },
            },
          );

          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self: any) => {
                  const progress = self.progress;
                  const point = mobilePath.getPointAtLength(
                    progress * pathLength,
                  );
                  const nextPoint = mobilePath.getPointAtLength(
                    Math.min(progress * pathLength + 2, pathLength),
                  );

                  // Detect scroll direction
                  const currentScrollY = window.scrollY;
                  const isScrollingDown = currentScrollY > lastScrollY.current;
                  lastScrollY.current = currentScrollY;

                  const angle =
                    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                    (180 / Math.PI);
                  // Flip arrow based on scroll direction
                  const adjustedAngle = isScrollingDown ? angle : angle + 180;

                  gsap.set(mobileArrow, {
                    x: point.x - 179,
                    y: point.y - 155,
                    rotation: adjustedAngle,
                    transformOrigin: "center center",
                  });
                },
              },
            },
          );
        }
      } catch (error) {
        console.error("Error loading GSAP:", error);
      }
    };

    loadGSAP();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return {
    sectionRef,
  };
};
