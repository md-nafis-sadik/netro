"use client";
import { useRef, useEffect } from "react";
import { ServiceDeliverable } from "@/services/types/interfaces/service";
import { cn } from "@/lib/utils";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Link from "next/link";
import DescriptionHeader from "../common/DescriptionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ServiceDeliverablesProps = {
  title?: string;
  description?: string;
  deliverables: ServiceDeliverable[];
};

function ServiceDeliverables({
  title = "WHAT WE DELIVER",
  description = "Our services cover both greenfield AI builds and augmentation of existing platforms.",
  deliverables,
}: ServiceDeliverablesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const cards = cardsRef.current.filter(Boolean);
    const viewportHeight = window.innerHeight;

    // Only animate all cards except the last one
    const cardsToAnimate = cards.slice(0, -1);

    if (cardsToAnimate.length === 0) return;

    const stickyContainer = containerRef.current.querySelector(
      ".sticky-wrapper",
    ) as HTMLElement;
    if (!stickyContainer) return;

    // Pin the sticky container while animations happen
    const animationDuration = viewportHeight * 1;
    const totalAnimationHeight = cardsToAnimate.length * animationDuration;

    // Create a pin for the container
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top+=15%",
      end: `+=${totalAnimationHeight}`,
      pin: stickyContainer,
      pinSpacing: true,
      markers: false,
    });

    // Animate all cards except the last one
    cardsToAnimate.forEach((card, index) => {
      const startOffset = index * animationDuration;

      gsap.to(card, {
        y: -viewportHeight * 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${startOffset}px top+=15%`,
          end: `top+=${startOffset + animationDuration}px top+=15%`,
          scrub: 2,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [deliverables]);

  return (
    <section className="py-10 relative z-10">
      <div className="container flex_center flex-col">
        <DescriptionHeader
          title={title}
          text={description}
          descriptionClassName="max-w-full"
        />

        <div ref={containerRef} className="w-full relative my-8 md:my-10">
          <div className="sticky-wrapper">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={cn(
                  "deliverable-card rounded-2xl md:rounded-3xl py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12",
                  index === 0 ? "relative" : "absolute top-0 left-0 right-0",
                )}
                style={{
                  backgroundColor: deliverable.bgColor,
                  color: deliverable.textColor || "#000000",
                  zIndex: deliverables.length - index,
                  transform: `translateY(${index * 40}px)`,
                  width: "100%",
                }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-5 md:pb-8 mb-5 md:mb-8 border-b border-b-[#BDBDBD]">
                  <div className="flex-1">
                    <h3 className="text-[28px] md:text-3xl lg:text-4xl font-bold mb-3 text-center md:text-left leading-[110%]">
                      {deliverable.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg font-inter text-center md:text-left leading-[120%]">
                      {deliverable.description}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="btn_primary hidden md:flex bg-natural-900 hover:bg-black hover:text-white py-2 sm:py-3 px-4 sm:px-5 md:px-6 gap-2 whitespace-nowrap"
                  >
                    <span className="text-base font-semibold">Contact Us</span>
                    <ArrowLongTailIcon className="group-hover:fill-white fill-white duration-300" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                  <div className="flex flex-col gap-4 md:gap-5">
                    {deliverable.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="flex-shrink-0 mt-0.5 hidden md:block"
                        >
                          <path
                            d="M9 11L12 14L20 6"
                            stroke="#4D5757"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C12.9473 4 13.8561 4.16464 14.6994 4.46686"
                            stroke="#4D5757"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="block md:hidden"
                        >
                          <path
                            d="M7.5 9.16797L10 11.668L16.6667 5.0013"
                            stroke="#4D5757"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6667 9.9987C16.6667 13.6806 13.6819 16.6654 10 16.6654C6.31814 16.6654 3.33337 13.6806 3.33337 9.9987C3.33337 6.3168 6.31814 3.33203 10 3.33203C10.7894 3.33203 11.5468 3.46923 12.2495 3.72108"
                            stroke="#4D5757"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm md:text-base font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5">
                    {deliverable.features.slice(5, 10).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="flex-shrink-0 mt-0.5 hidden md:block"
                        >
                          <path
                            d="M9 11L12 14L20 6"
                            stroke="#4D5757"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C12.9473 4 13.8561 4.16464 14.6994 4.46686"
                            stroke="#4D5757"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="block md:hidden"
                        >
                          <path
                            d="M7.5 9.16797L10 11.668L16.6667 5.0013"
                            stroke="#4D5757"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6667 9.9987C16.6667 13.6806 13.6819 16.6654 10 16.6654C6.31814 16.6654 3.33337 13.6806 3.33337 9.9987C3.33337 6.3168 6.31814 3.33203 10 3.33203C10.7894 3.33203 11.5468 3.46923 12.2495 3.72108"
                            stroke="#4D5757"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm md:text-base font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="btn_primary md:hidden flex bg-natural-900 hover:bg-black hover:text-white py-2 sm:py-3 px-4 sm:px-5 md:px-6 gap-2 whitespace-nowrap w-max mt-8 mx-auto"
                >
                  <span className="text-base font-semibold">Contact Us</span>
                  <ArrowLongTailIcon className="group-hover:fill-white fill-white duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDeliverables;
