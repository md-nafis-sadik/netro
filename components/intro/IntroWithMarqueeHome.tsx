"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeHome from "../marquee/MarqueeHome";

gsap.registerPlugin(ScrollTrigger);

const IntroWithMarqueeHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const paragraphEl = paragraphRef.current;
    if (!container || !paragraphEl) return;

    // Split paragraph into animated spans
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

    // Main timeline for pinning and revealing
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          markers: false,
        },
      })
      .fromTo(
        allLetters,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: {
            amount: 2,
            each: 0.02,
          },
          ease: "power2.out",
        }
      );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full -mt-52 min-h-[240px] md:min-h-[280px] lg:min-h-[420px] relative z-10"
    >
      {/* Hero Marquee Section */}
      <div className="relative w-full overflow-hidden min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
        <MarqueeHome
          dark={true}
          className="absolute -bottom-20 md:-bottom-[120px] left-1/2 -translate-x-1/2"
        />
        <MarqueeHome
          dark={false}
          className="absolute -bottom-16 md:-bottom-5 left-1/2 -translate-x-1/2"
        />
        <div className="bg-black h-[200px] absolute top-0 w-full" />
      </div>

      {/* Text Reveal Section */}
      <div className="containerX -mt-52 flex flow-row items-center overflow-hidden h-full md:h-screen px-4 md:px-0 py-20 md:py-0">
        <div className="hidden md:block w-2/5" />
        <p
          ref={paragraphRef}
          className="w-full md:w-3/5 text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900 font-inter"
        >
          Netro Systems fosters innovation, collaboration, diversity, and
          growth, creating impactful software solutions in a vibrant, inclusive
          culture.
        </p>
      </div>
    </div>
  );
};

export default IntroWithMarqueeHome;
