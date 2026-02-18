import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

type AnimateOptions = {
  y?: number;
  x?: number;
  alpha?: number;
  scale?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  once?: boolean;
};

export function useStaggerReveal(
  ref: RefObject<HTMLElement | null>,
  options: AnimateOptions = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const animation = gsap.from(ref.current.children, {
        opacity: options.opacity ?? 0,
        y: options.y ?? 40,
        x: options.x ?? 0,
        alpha: options.alpha ?? 0,
        scale: options.scale ?? 0.95,
        duration: options.duration ?? 0.8,
        stagger: options.stagger ?? 0.2,
        ease: options.ease ?? "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? "top 85%",
          toggleActions: "play none none none",
          once: options.once ?? true,
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    },
    {
      scope: ref,
      dependencies: [],
    },
  );
}

export function useAnimation(
  ref: RefObject<HTMLElement | null>,
  options: AnimateOptions = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const animation = gsap.from(ref.current, {
        opacity: options.opacity ?? 0,
        y: options.y ?? 40,
        x: options.x ?? 0,
        scale: options.scale ?? 0.9,
        duration: options.duration ?? 0.8,
        ease: options.ease ?? "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? "top 85%",
          toggleActions: "play none none none",
          once: options.once ?? true,
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    },
    {
      scope: ref,
      dependencies: [],
    },
  );
}
