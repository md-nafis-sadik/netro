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

const ViewAbout = () => {
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

  const [selectedIndex, setSelectedIndex] = useState<number>(1);

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
    <section ref={containerRef} className="containerX overflow-hidden">
      <div className="mx-auto mt-6 md:mt-10 min-h-[234px] md:min-h-[544px] lg:min-h-[660px] overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 pt-10">
            {aboutViewData.map(({ image, title, description }, index) => (
              <div className="flex-[0_0_33.333%] px-2" key={index}>
                <div
                  className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-out"
                  style={{
                    height: selectedIndex === index ? "234px" : "186px",
                    transform:
                      selectedIndex === index
                        ? "scale(1.1) translateY(-30px)"
                        : "scale(1) translateY(0)",
                    ...(window.innerWidth >= 768 && {
                      height: selectedIndex === index ? "544px" : "434px",
                    }),
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
          "text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900 my-10 md:mt-0 md:mb-[120px]"
        )}
        ref={paragraphRef}
      >
        Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture.
      </p>
    </section>
  );
};

export default ViewAbout;
