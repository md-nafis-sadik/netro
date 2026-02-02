"use client";
import { useRef, useState, useEffect } from "react";
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

    // Create individual ScrollTriggers for each card
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: -window.innerHeight, // Move entire card height + viewport off screen
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${index * 100} top`,
          end: `top+=${(index + 1) * 100} top`,
          scrub: 1,
          markers: false, // Set to true for debugging
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [deliverables]);

  return (
    <section className="py-20">
      <div className="container flex_center flex-col">
        <DescriptionHeader
          title={title}
          text={description}
          descriptionClassName="max-w-full"
        />

        <div
          ref={containerRef}
          className="w-full relative mt-20 md:mt-32"
          style={{
            height: `${deliverables.length * 100}vh`, // Reduced height
          }}
        >
          <div className="sticky top-0">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={cn(
                  "deliverable-card rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16",
                  index === 0 ? "relative" : "absolute top-0 left-0 right-0"
                )}
                style={{
                  backgroundColor: deliverable.bgColor,
                  color: deliverable.textColor || "#000000",
                  zIndex: deliverables.length - index,
                  transform: `translateY(${index * 50}px)`,
                  width: "100%",
                }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 md:pb-8 mb-6 md:mb-8 border-b border-b-[#BDBDBD]">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                      {deliverable.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg font-inter opacity-90">
                      {deliverable.description}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="btn_primary bg-natural-900 hover:bg-black hover:text-white py-2 sm:py-3 px-4 sm:px-5 md:px-6 flex gap-2 whitespace-nowrap"
                  >
                    <span className="text-base font-semibold">Contact Us</span>
                    <ArrowLongTailIcon className="group-hover:fill-white fill-white duration-300" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex flex-col gap-4 md:gap-5">
                    {deliverable.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="flex-shrink-0 mt-0.5"
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
                        <span className="text-sm md:text-base font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5">
                    {deliverable.features.slice(5, 10).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="flex-shrink-0 mt-0.5"
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
                        <span className="text-sm md:text-base font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDeliverables;