"use client";
import { useLayoutEffect, useRef } from "react";
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

    words.forEach((word) => {
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
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: {
          amount: 2,
          each: 0.02,
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // scroll for 1x viewport height
          scrub: 1.2,
          pin: true,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="containerX flex flow-row items-center overflow-hidden h-full md:h-screen px-4 md:px-0 py-20 md:py-0"
    >
      <div className="hidden md:block w-2/5" />

      <p
        ref={paragraphRef}
        className="w-full md:w-3/5 text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900"
      >
        Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture.
      </p>
    </div>
  );
};

export default IntroHome;
