"use client";
import { scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useLayoutEffect, useRef } from "react";

interface IFHeader {
  dark?: boolean;
  lite?: boolean;
  text: string;
}

const SectionHeader = ({ dark, lite, text }: IFHeader) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Split text into spans manually
    if (containerRef.current) {
      const chars = text
        .split("")
        .map(
          (char, index) => `<span class="char" key="${index}">${char}</span>`
        )
        .join("");
      containerRef.current.innerHTML = chars;
    }
  }, [text]);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (!chars) return;

    // Convert NodeList to Array and reverse it for right-to-left animation
    const charsArray = Array.from(chars).reverse();

    // Reset any existing animations
    gsap.set(charsArray, {
      opacity: 0,
      x: 100, // Start from right
    });

    // Animate each character
    gsap.to(charsArray, {
      duration: 1.2, // Longer duration for bouncier effect
      opacity: 1,
      x: 0,
      stagger: 0.06, // Increased stagger for more visible effect
      ease: "elastic.out(1, 0.5)", // Bouncy elastic effect
      delay: 0.3,
    });
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={cn(
        scoutCond.className,
        "text-[128px] font-bold !leading-[0.9] uppercase text-center mt-10",
        dark && "dark-text-gradient",
        lite && "lite-text-gradient"
      )}
    >
      {text}
    </div>
  );
};

export default SectionHeader;
