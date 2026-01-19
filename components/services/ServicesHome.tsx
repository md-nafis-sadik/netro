"use client";
import { cn } from "@/lib/utils";
import { IService } from "@/services";
import { RightLongArrowIcon } from "@/services/assets/svgs";
import { servicesData } from "@/services/data";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

function ServicesHome() {
  const [activeService, setActiveService] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- INITIAL LOAD ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-sub, .services-title",
        { autoAlpha: 0, y: 24, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        ".service-item",
        { autoAlpha: 0, x: -24, scale: 0.96 },
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".service-image",
        { autoAlpha: 0, scale: 0.96 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.1,
          delay: 0.4,
          ease: "expo.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- IMAGE SMOOTH CHANGE ---------------- */
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        autoAlpha: 0,
        scale: 0.98,
        y: 12,
      },
      {
        autoAlpha: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      },
    );
  }, [activeService]);

  return (
    <section
      ref={sectionRef}
      data-bg-theme="light"
      className="py-10 md:py-16 lg:py-20 font-inter"
    >
      <div className="container2X flex_center flex-col">
        <SectionSubHeader
          text="Services"
          className="services-sub border-dashed border-natural-350"
        />

        <SectionHeader className="services-title mt-5 text-black">
          Solutions for You
        </SectionHeader>

        <div className="flex w-full mt-10 md:mt-16 lg:mt-20 gap-10 md:gap-16 lg:gap-20">
          <div className="flex-1 flex flex-col">
            {servicesData?.map((service: IService, index: number) => (
              <Link
                key={service?._id}
                href="/"
                className={cn(
                  "service-item flex items-center gap-4 min-h-20 max-w-max transition-colors",
                  activeService === index ? "text-black" : "text-black/25",
                )}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(0)}
              >
                <span className="text-xl font-medium duration-300">
                  {index < 9 ? "0" + (index + 1) : index + 1}
                </span>

                <RightLongArrowIcon
                  className={cn(
                    "duration-500 origin-left",
                    activeService === index
                      ? "size-16 scale-100"
                      : "size-0 scale-90",
                  )}
                />

                <h3
                  className={cn(
                    "text-5xl duration-500",
                    activeService === index
                      ? "font-bold scale-[1.02]"
                      : "font-normal scale-100",
                  )}
                >
                  {service?.title}
                </h3>
              </Link>
            ))}
          </div>

          <div
            ref={imageRef}
            className="service-image relative w-full max-w-[540px]"
          >
            <Image
              src={servicesData[activeService].image}
              alt="service image"
              className="w-full h-auto object-contain will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHome;
