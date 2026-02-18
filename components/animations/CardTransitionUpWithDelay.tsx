"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

interface CardTransitionUpWithDelayProps {
  children: React.ReactNode;
  index: number;
  duration?: number;
  className?: string;
  startAnim?: number;
}

const CardTransitionUpWithDelay: React.FC<CardTransitionUpWithDelayProps> = ({
  children,
  index,
  duration,
  className,
  startAnim,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      const animation = gsap.fromTo(
        cardRef.current,
        {
          y: 400,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: "0px",
          opacity: 1,
          scale: 1,
          duration: duration || 0.5 * (index + 1),
          // ease: "power1.in",
          transition: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: cardRef.current,
            start: startAnim
              ? `top ${startAnim}%`
              : window?.innerWidth > 768
              ? "top 80%"
              : "top 100%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, [index]);

  return (
    <div ref={cardRef} className={cn("w-full", className)}>
      {children}
    </div>
  );
};

export default CardTransitionUpWithDelay;
