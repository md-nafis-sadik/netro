"use client";
import { scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface IFHeader {
  dark?: boolean;
  lite?: boolean;
  text: string;
}

const SectionHeader = ({ dark, lite, text }: IFHeader) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Split text into individual letters while preserving spaces
    const letters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces as non-breaking spaces
      span.style.display = "inline-block"; // Required for individual animation
      if (char === " ") {
        span.style.marginRight = "0.1em"; // Adjust spacing for one letter width
      }
      container.appendChild(span);
      return span;
    });

    // GSAP Animation
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 0.3 },
    });

    tl.fromTo(
      letters,
      {
        opacity: 0,
        x: 50,
        rotate: () => gsap.utils.random(-45, 45), // Random starting angles
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0, // Reset to straight
        stagger: 0.1, // Stagger for smooth letter appearance
      }
    );

    return () => {
      gsap.killTweensOf(letters);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={cn(
        scoutCond.className,
        "text-[128px] font-bold !leading-[0.9] uppercase text-center mt-10",
        dark && "text-black",
        lite && "lite-text-gradient"
      )}
    />
  );
};

export default SectionHeader;
