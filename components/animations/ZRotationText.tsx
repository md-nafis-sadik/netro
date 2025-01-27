"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ZRotationTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const ZRotationText = ({ text, delay = 0, className }: ZRotationTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !originalRef.current || !cloneRef.current)
      return;

    const splitText = (text: string) => {
      return text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ transformOrigin: "50% 50% -50px" }}
        >
          {char}
        </span>
      ));
    };

    const originalChars = originalRef.current.children;
    const cloneChars = cloneRef.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      delay,
    });

    // Set initial positions
    gsap.set(cloneChars, {
      rotationX: -90,
      opacity: 0,
      transformOrigin: "50% 50% -50",
    });

    // Animation sequence
    tl.to(originalChars, {
      duration: 0.4,
      rotationX: 90,
      transformOrigin: "50% 50% -50",
      stagger: {
        each: 0.02,
        ease: "power2",
        from: "start",
      },
    })
      .to(
        originalChars,
        {
          duration: 0.4,
          opacity: 0,
          stagger: {
            each: 0.02,
            ease: "power4.in",
          },
        },
        0
      )
      .to(
        cloneChars,
        {
          duration: 0.05,
          opacity: 1,
          stagger: {
            each: 0.02,
          },
        },
        0.001
      )
      .to(
        cloneChars,
        {
          duration: 0.4,
          rotationX: 0,
          stagger: {
            each: 0.02,
          },
        },
        0
      );

    return () => {
      tl.kill();
    };
  }, [text, delay]);

  return (
    <div ref={containerRef} className="relative w-fit whitespace-nowrap">
      <div
        ref={originalRef}
        className={cn(
          "relative [&>span]:inline-block font-scoutcond font-bold uppercase leading-[0.8]",
          className
        )}
        style={{ perspective: "600px" }}
      >
        {text.split("").map((char, i) => (
          <span key={i} className="text-gray-700">
            {char}
          </span>
        ))}
      </div>
      <div
        ref={cloneRef}
        className={cn(
          "absolute top-0 left-0 [&>span]:inline-block font-scoutcond font-bold uppercase leading-[0.8]",
          className
        )}
        style={{ perspective: "600px" }}
      >
        {text.split("").map((char, i) => (
          <span key={i} className="hero-text-gradient">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ZRotationText;
