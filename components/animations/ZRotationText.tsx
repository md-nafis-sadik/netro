"use client";
import React, { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ZRotationTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const ZRotationText: React.FC<ZRotationTextProps> = ({
  text,
  delay = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const originalText = container.querySelector(".original-text");
      const cloneText = container.querySelector(".clone-text");

      if (!originalText || !cloneText) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(originalText, {
        rotationX: 90,
        opacity: 0,
        duration: 0.4,
        stagger: 0.02,
      }).fromTo(
        cloneText,
        {
          rotationX: -90,
          opacity: 0,
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        },
        0
      );

      // Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.delayedCall(delay, () => tl.play());
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(container);

      return () => observer.disconnect();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`relative h-20 flex items-center justify-center ${className}`}
    >
      <h1 className="text-4xl font-bold relative overflow-hidden">
        <span className="original-text absolute top-0 left-0 w-full text-center">
          {text}
        </span>
        <span
          className="clone-text absolute top-0 left-0 w-full text-center"
          style={{ transform: "translateY(-100%)" }}
        >
          {text}
        </span>
      </h1>
    </div>
  );
};

export default ZRotationText;
