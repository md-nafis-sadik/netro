"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export interface AnimationOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  start?: string;
  end?: string;
}

export const useAppearanceAnimation = (
  selector: string,
  options: AnimationOptions = {},
) => {
  const containerRef = useRef<HTMLElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const {
    y = 50,
    x = 0,
    opacity = 0,
    duration = 0.8,
    stagger = 0.2,
    ease = "power3.out",
    delay = 0,
    start = "top 80%",
    end = "top 20%",
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline
      animationRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          toggleActions: "play none none reverse",
          once: true, // Optional: play only once
        },
      });

      // Animate all elements that match the selector inside the container
      animationRef.current.fromTo(
        selector,
        {
          y,
          x,
          opacity,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration,
          stagger,
          ease,
          delay,
        },
      );
    }, containerRef);

    return () => {
      ctx.revert();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [selector, y, x, opacity, duration, stagger, ease, delay, start, end]);

  return containerRef;
};
