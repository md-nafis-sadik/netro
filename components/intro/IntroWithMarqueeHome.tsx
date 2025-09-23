"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeHome from "../marquee/MarqueeHome";

gsap.registerPlugin(ScrollTrigger);

const IntroWithMarqueeHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const paragraphText =
    "Netro Systems fosters innovation, collaboration, diversity, and growth, creating impactful software solutions in a vibrant, inclusive culture.";

  useLayoutEffect(() => {
    const container = containerRef.current;
    const paragraphEl = paragraphRef.current;
    if (!container || !paragraphEl) return;

    // Clear first in case of rerenders (like navigation)
    paragraphEl.innerHTML = "";

    // Use the raw string instead of textContent
    const words = paragraphText.split(" ");

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

    // Main timeline for pinning and revealing
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          markers: false,
        },
      })
      .fromTo(
        allLetters,
        { opacity: 0.25 },
        {
          opacity: 1,
          stagger: {
            amount: 2,
            each: 0.02,
          },
          ease: "none",
        }
      );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[240px] md:min-h-[280px] lg:min-h-[380px] relative z-10 overflow-hidden"
    >
      {/* Text Reveal Section */}
      <div className="containerX flex flow-row items-center overflow-hidden h-full md:h-screen px-4 md:px-0 py-20 md:py-0">
        <p
          ref={paragraphRef}
          className="w-full md:w-3/5 text-2xl md:text-5xl text-center font-bold !leading-[1.4] text-text-900 font-inter mx-auto"
        />
      </div>
    </div>
  );
};

export default IntroWithMarqueeHome;
