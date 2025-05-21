"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const IntroHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const paragraphEl = paragraphRef.current;
    if (!paragraphEl) return;

    const text = paragraphEl.textContent || "";
    const words = text.split(" ");
    paragraphEl.innerHTML = "";

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block mr-[0.25em]";

      [...word].forEach((letter) => {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = letter;
        letterSpan.className = "inline-block opacity-0";
        wordSpan.appendChild(letterSpan);
      });

      paragraphEl.appendChild(wordSpan);
    });

    const allLetters = paragraphEl.querySelectorAll("span span");

    gsap.fromTo(
      allLetters,
      {
        opacity: 0,
        // y: 0,
        scale: 0.92,
      },
      {
        opacity: 1,
        // y: 0,
        scale: 1,
        stagger: {
          amount: 1,
          each: 0.03,
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="containerX pt-[110px] pb-[60px] md:py-[160px] flex flow-row overflow-hidden">
      <div className="hidden md:block w-2/5" />

      <p className="w-full md:w-3/5 text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900">
        Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture.
      </p>
    </div>
  );
};

export default IntroHome;
