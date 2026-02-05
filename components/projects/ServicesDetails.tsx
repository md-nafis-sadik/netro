"use client";

import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ExpandableButtonList from "../hero/partials/ExpandableButtonList";

const ServicesDetails = ({ service }: any) => {

  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const points = [
    "Automate work and reduce cost",
    "Build AI-driven products and features",
    "Extend legacy systems",
  ];

  const sectionRef = useAppearanceAnimation(".service-image", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.1,
  });

  return (
    <div className="container py-10 md:py-[60px] lg:py-[100px]">
      <div className="flex flex-col md:flex-row gap-6 mt-16 md:mt-20 lg:mt-24">
        <div className="w-full md:w-[68%] max-w-[780px]">
          <h2
            className="portfolio_details_header text-center md:text-left text-[28px] md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide"
            style={{ lineHeight: "120%" }}
          >
            {service.descTitle}
          </h2>
          <p className="font-inter text-sm md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light !leading-[140%] text-center md:text-left text-white mt-4">
            {service?.description}
          </p>
          <ExpandableButtonList
            className="justify-start hidden md:flex"
            blue={true}
          />
        </div>
        <div className="w-full md:w-[32%] flex items-end">
          <div className="flex flex-col gap-3 md:gap-4">
            {points &&
              points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[8px] md:gap-3 text-white text-sm md:text-base"
                >
                  <span className="bg-[#212121] w-4 md:w-8 h-4 md:h-8 rounded-full hidden md:flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6666 5L7.49992 14.1667L3.33325 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="bg-[#212121] w-4 md:w-8 h-4 md:h-8 rounded-full flex md:hidden items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M8.33329 2.5L3.74996 7.08333L1.66663 5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{points[index]}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <ExpandableButtonList className="md:hidden" blue={true} />

      <Image
        src={service.featuredImage}
        alt={`service image ${service.title}`}
        className="min-h-auto min-w-full object-contain mt-[50px] rounded-3xl md:rounded-[32px]"
        height={1280}
        width={1920}
      />
    </div>
  );
};

export default ServicesDetails;
