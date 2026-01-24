"use client";
import { useServiceAnimation } from "@/hooks/useServiceAnimation";
import { cn } from "@/lib/utils";
import { IService } from "@/services";
import { RightLongArrowIcon } from "@/services/assets/svgs";
import { servicesData } from "@/services/data";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

function ServicesHome() {
  const { sectionRef, imageRef, activeService, setActiveService } =
    useServiceAnimation();

  return (
    <section
      ref={sectionRef}
      data-bg-theme="light"
      className="py-10 md:py-16 lg:py-20 font-inter overflow-hidden"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader
          text="Services"
          className="services-sub border-dashed border-natural-350"
        />

        <SectionHeader className="services-title mt-5 text-black">
          Solutions for You
        </SectionHeader>

        <div className="flex flex-col lg:flex-row justify-between w-full mt-10 md:mt-16 lg:mt-20 gap-8">
          <div className="flex-1 flex flex-col">
            {servicesData?.map((service: IService, index: number) => (
              <Link
                key={service?._id}
                href="/"
                className={cn(
                  "whitespace-nowrap service-item flex items-center gap-4 min-h-8 xs:min-h-10 sm:min-h-16 lg:min-h-20 max-w-max transition-colors",
                  activeService === index ? "text-black" : "text-black/25",
                )}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(0)}
              >
                <span className="text-xl font-medium duration-300 font-scoutcond">
                  {index < 9 ? "0" + (index + 1) : index + 1}
                </span>

                <RightLongArrowIcon
                  className={cn(
                    "duration-500 origin-left",
                    activeService === index
                      ? "size-6 sm:size-10 xl:size-16 scale-100"
                      : "size-0 scale-90",
                  )}
                />

                <h3
                  className={cn(
                    "text-sm xs:text-xl sm:text-3xl xl:text-5xl duration-500",
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
            className="service-image relative w-full lg:max-w-[540px] lg:h-[410px]"
          >
            <Image
              src={servicesData[activeService].image}
              alt="service image"
              className="w-full h-full object-contain will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHome;
