"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const IntroHome = () => {
  const containerRef = useRef(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pinRef = useRef(null);
  const splitWordsRef = useRef<HTMLSpanElement[]>([]);

  // Manual implementation of text splitting instead of using SplitText plugin
  useEffect(() => {
    if (paragraphRef.current) {
      // Get the original text
      const originalText = paragraphRef.current.innerText;

      // Split the text into words
      const words = originalText.split(" ");

      // Clear the original content
      paragraphRef.current.innerText = "";

      // Create spans for each word
      words.forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";
        wordSpan.style.display = "inline-block";
        wordSpan.style.marginRight = "0.25em"; // add space between words
        wordSpan.innerText = word;

        // Add the span to the paragraph
        if (paragraphRef.current) {
          paragraphRef.current.appendChild(wordSpan);
        }

        // Store references to the spans
        splitWordsRef.current.push(wordSpan);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (splitWordsRef.current.length > 0) {
        gsap.from(splitWordsRef.current, {
          opacity: 0.15,
          stagger: 2,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            markers: true,
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: pinRef.current,
          },
        });
      }
    },
    { scope: containerRef, dependencies: [splitWordsRef.current.length] }
  );

  useGSAP(
    () => {
      if (splitWordsRef.current.length > 0) {
        gsap.from(splitWordsRef.current, {
          opacity: 0.15,
          stagger: 2,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            markers: true,
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: pinRef.current,
          },
        });
      }
    },
    { scope: containerRef, dependencies: [splitWordsRef.current.length] }
  );

  return (
    <div
      ref={containerRef}
      className="containerX pt-[110px] pb-[60px] md:py-[160px] flex flow-row"
    >
      <div ref={pinRef} className="hidden md:block w-2/5" />

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
