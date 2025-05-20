"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Props = {
  value?: number;
  duration?: number;
  className?: string;
};

const NumberCounter = ({ value, duration = 2, className = "" }: Props) => {
  const el = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useGSAP(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          gsap.to(counter, {
            val: value,
            duration,
            ease: "power1.out",
            onUpdate: () => {
              if (el.current) {
                el.current.textContent = Math.floor(counter.val).toString();
              }
            },
          });
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (el.current) observer.observe(el.current);
  }, [value, duration, hasAnimated]);

  const counter = { val: 0 };

  return (
    <span ref={el} className={cn("text-4xl font-bold", className)}>
      0
    </span>
  );
};

export default NumberCounter;
