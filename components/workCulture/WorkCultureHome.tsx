"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import { Button } from "@/components/ui/button";
import colors from "@/lib/colors";
import { images } from "@/services";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import { routes } from "@/services/data/shared.data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorkCultureHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imageCards = [
    {
      image: images.officeImage8,
      alt: "office image 8",
    },
    {
      image: images.officeImage4,
      alt: "office image 2",
    },
  ];

  const paragraphText =
    "Netro Systems fosters innovation, collaboration, diversity, and growth, creating impactful software solutions in a vibrant, inclusive culture.";

  useLayoutEffect(() => {
    // Initialize cards first
    initializeCards();

    // Setup text animation
    setupTextAnimation();

    // Setup card stack animation
    setupCardStackAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const initializeCards = () => {
    cardsRef.current.forEach((card: HTMLDivElement | null, index: number) => {
      if (!card) return;

      gsap.set(card, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        zIndex: imageCards.length - index,
        transformOrigin: "center center",
        opacity: 1,
      });

      // Initial stacking
      if (index === 0) {
        gsap.set(card, {
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
        });
      } else {
        gsap.set(card, {
          scale: 1 - index * 0.03,
          rotation: index * -3,
          x: index * 10,
          y: index * 10,
        });
      }
    });
  };

  const setupTextAnimation = () => {
    const paragraphEl = paragraphRef.current;
    if (!paragraphEl) return;

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

    gsap.fromTo(
      allLetters,
      {
        opacity: 0.25,
      },
      {
        opacity: 1,
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
  };

  const setupCardStackAnimation = () => {
    if (!cardsContainerRef.current || cardsRef.current.length === 0) return;

    // Create timeline for card stack animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 0.8, // Reduced from 1 for smoother response
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = imageCards.length;
          const cardProgress = progress * (totalCards - 1);
          const activeIndex = Math.floor(cardProgress);
          const cardTransition = cardProgress - activeIndex;

          // Update current index
          if (activeIndex !== currentIndex) {
            setCurrentIndex(Math.min(activeIndex, totalCards - 1));
          }

          // Animate cards based on scroll position
          cardsRef.current.forEach(
            (card: HTMLDivElement | null, index: number) => {
              if (!card) return;

              let scale, rotation, x, y, opacity;

              if (index < activeIndex) {
                // Cards that have been scrolled past - make them disappear completely
                const exitProgress = Math.min(1, (cardProgress - index) * 1.5); // Faster exit
                scale = 1 - exitProgress * 0.3;
                rotation = -25 * exitProgress;
                x = -200 * exitProgress;
                y = 40 * exitProgress;
                opacity = Math.max(0, 1 - exitProgress); // Complete fade to 0
              } else if (index === activeIndex) {
                // Currently active card - smoother transition
                scale = 1 - cardTransition * 0.08;
                rotation = -12 * cardTransition;
                x = -60 * cardTransition;
                y = 20 * cardTransition;
                opacity = 1 - cardTransition * 0.6; // More gradual fade
              } else if (index === activeIndex + 1) {
                // Next card coming in - smoother entrance
                const enterProgress = Math.max(0, cardTransition);
                scale = 0.92 + enterProgress * 0.08; // Start smaller, grow to full size
                rotation = -5 + enterProgress * 5;
                x = 15 - enterProgress * 15;
                y = 15 - enterProgress * 15;
                opacity = 0.4 + enterProgress * 0.6; // Smooth fade in
              } else {
                // Cards further back in stack
                const stackIndex = index - Math.max(activeIndex, 0);
                scale = 1 - stackIndex * 0.04;
                rotation = stackIndex * -4;
                x = stackIndex * 12;
                y = stackIndex * 12;
                opacity = Math.max(0.2, 1 - stackIndex * 0.2);
              }

              gsap.to(card, {
                scale: Math.max(0.7, scale),
                rotation,
                x,
                y,
                opacity: Math.max(0, opacity),
                duration: 0.45,
                ease: "power1.out",
              });
            }
          );
        },
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="containerX w-full pt-10 md:pt-20 lg:pt-[160px] pb-20 lg:pb-[160px] relative"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left portion */}
        <div className="flex flex-col w-full md:w-[45%]">
          <SectionSubHeader text="Work Culture" className="w-fit" />

          <p
            ref={paragraphRef}
            className="text-2xl md:text-[40px] font-bold !leading-[1.2] mt-6 md:mt-10"
          />

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-2 md:gap-4">
            <Link href={routes.career.link}>
              <Button className="w-fit group">
                <span className="!leading-none">Join our team</span>
                <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
              </Button>
            </Link>
            <ArrowLineupButton
              href={routes.about.link}
              lineColor={colors.main[400]}
              className=""
            >
              Know more about us
            </ArrowLineupButton>
          </div>
        </div>

        {/* Right portion - Cards Container */}
        <div
          ref={cardsContainerRef}
          className="w-full md:w-[55%] relative h-[400px] md:h-[500px]"
        >
          {imageCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute top-0 left-0 w-full h-full overflow-hidden shadow-lg flex_center"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                className="min-w-full min-h-full object-cover"
                height={1024}
                width={1024}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCultureHome;
