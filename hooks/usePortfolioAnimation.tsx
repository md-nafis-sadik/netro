import { useEffect, useRef } from "react";

export const useCarrierFlowAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        // Desktop animations
        const desktopPath = document.querySelector(
          "#desktop-path",
        ) as SVGPathElement;
        const desktopArrow = document.querySelector(
          "#desktop-arrow",
        ) as SVGGElement;
        const desktopMaskPath = document.querySelector(
          "#desktop-mask-path",
        ) as SVGPathElement;

        if (desktopPath && desktopArrow && desktopMaskPath) {
          const pathLength = desktopPath.getTotalLength();

          // Hide arrow initially
          gsap.set(desktopArrow, { opacity: 0 });

          // Set mask path initial state (hidden)
          gsap.set(desktopMaskPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          // Animate mask path to reveal dashed line in 2 seconds
          gsap.to(desktopMaskPath, {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              once: true,
            },
            onStart: () => {
              // Show arrow after path animation completes
              gsap.to(desktopArrow, { opacity: 1, duration: 0.3 });
            },
          });

          // Arrow follows path on scroll
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

                  const angle =
                    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                    (180 / Math.PI);

                  gsap.set(desktopArrow, {
                    x: point.x - 327,
                    y: point.y - 188,
                    rotation: angle + 180,
                    transformOrigin: "center center",
                  });
                },
              },
            },
          );
        }

        // Mobile animations
        const mobilePath = document.querySelector(
          "#mobile-path",
        ) as SVGPathElement;
        const mobileArrow = document.querySelector(
          "#mobile-arrow",
        ) as SVGGElement;
        const mobileMaskPath = document.querySelector(
          "#mobile-mask-path",
        ) as SVGPathElement;

        if (mobilePath && mobileArrow && mobileMaskPath) {
          const pathLength = mobilePath.getTotalLength();

          // Hide arrow initially
          gsap.set(mobileArrow, { opacity: 0 });

          // Set mask path initial state (hidden)
          gsap.set(mobileMaskPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          // Animate mask path to reveal dashed line in 2 seconds
          gsap.to(mobileMaskPath, {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              once: true,
            },
            onStart: () => {
              // Show arrow after path animation completes
              gsap.to(mobileArrow, { opacity: 1, duration: 0.3 });
            },
          });

          // Arrow follows path on scroll
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

                  const angle =
                    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                    (180 / Math.PI);

                  gsap.set(mobileArrow, {
                    x: point.x - 179,
                    y: point.y - 155,
                    rotation: angle + 180,
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

  return sectionRef;
};
