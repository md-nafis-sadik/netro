"use client";
import { cn } from "@/lib/utils";
import { aboutViewData } from "@/services/data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ViewAbout = ({ reverse }: { reverse?: boolean }) => {
  const options = {
    align: "center",
    loop: true,
    slidesToScroll: 1,
  } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const isInitializedRef = useRef(false);

  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const paragraphText =
    "Netro Systems fosters innovation, collaboration, diversity, and growth, creating impactful software solutions in a vibrant, inclusive culture.";

  // EMBLA API CENTERED SLIDE INDEX
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial value

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Reset scroll position when component mounts from navigation
  useEffect(() => {
    if (!isInitializedRef.current) {
      window.scrollTo(0, 0);

      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
      }, 50);

      isInitializedRef.current = true;

      return () => clearTimeout(timeoutId);
    }
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const paragraphEl = paragraphRef.current;
    if (!container || !paragraphEl) return;

    // Kill all existing ScrollTriggers first
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    paragraphEl.innerHTML = "";

    window.scrollTo(0, 0);

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

    // Wait for DOM to be ready and scroll position to be reset
    const setupAnimation = () => {
      let startValue = "top -50%";

      if (window.innerWidth < 768) {
        startValue = "top top"; // mobile
      } else if (window.innerWidth < 1024) {
        startValue = "top -30%"; // tablet
      } else if (window.innerWidth < 1700) {
        startValue = "top -40%"; // laptop
      }

      ScrollTrigger.refresh();

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: startValue,
            end: "+=300%",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          allLetters,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: { each: 0.02, amount: 2 },
            ease: "power2.out",
          }
        );
    };

    const timeoutId = setTimeout(setupAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "containerX overflow-hidden w-full flex",
        reverse ? "flex-col-reverse" : "flex-col"
      )}
    >
      <div className="mx-auto w-full mt-6 md:mt-10 mb-10 md:mb-0 h-[234px] min-h-[234px] md:h-[544px] md:min-h-[544px] lg:h-[660px] lg:min-h-[660px] overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex flex-row items-center gap-4 sm:gap-6 pt-10">
            {aboutViewData.map(({ image, title, description }, index) => (
              <div
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] px-2"
                key={index}
              >
                <div
                  className={cn(
                    "relative overflow-hidden transition-all duration-300 ease-out",
                    selectedIndex === index
                      ? "h-[234px] md:h-[544px]"
                      : "h-[186px] md:h-[434px]",
                    index === aboutViewData.length - 1 && "me-4 md:me-6"
                  )}
                  style={{
                    transform:
                      selectedIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <Image
                    src={image}
                    alt={title}
                    aria-label={description}
                    width={1280}
                    height={1280}
                    className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p
        className={cn(
          "text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900 mt-20 md:mt-16",
          reverse ? "md:mb-14" : "md:mb-[100px]"
        )}
        ref={paragraphRef}
      />
    </section>
  );
};

export default ViewAbout;
