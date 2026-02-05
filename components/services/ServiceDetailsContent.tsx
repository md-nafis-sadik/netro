import { findServiceBySlug } from "@/services/data/services.data";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { tidycalMettingUrl } from "@/services/data/shared.data";
import { notFound } from "next/navigation";
import ExpandableButtonList from "../hero/partials/ExpandableButtonList";
import { cn } from "@/lib/utils";
import DescriptionHeader from "../common/DescriptionHeader";
import ServiceDeliverables from "./ServiceDeliverables";
import { images } from "@/services";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ServicesOffer from "../projects/ServicesOffer";

const ServiceDetailsContent = async ({ slug }: { slug: string }) => {
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const data = [
    {
      title: "AI Consulting",
      desc: "Automate work and reduce cost",
      link: "/services/ai-consulting",
      featuredImage: images.serviceFrame1,
    },
    {
      title: "AI Consulting",
      desc: "Build AI-driven products and features",
      link: "/services/ai-consulting",
      featuredImage: images.serviceFrame2,
    },
    {
      title: "AI Consulting",
      desc: "Extend legacy systems with intelligence",
      link: "/services/ai-consulting",
      featuredImage: images.serviceFrame3,
    },
  ];

  const points = [
    "Automate work and reduce cost",
    "Build AI-driven products and features",
    "Extend legacy systems",
  ];

  return (
    <section className="bg-darkPurplebg relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 flex justify-center md:justify-start">
        <Image
          src={images.ellipseBg}
          alt="background ellipse"
          className="absolute top-[2%] sm:top-[7%] 2xl:top-[3%] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 min-w-[1110px] md:w-full h-auto object-cover md:object-contain"
          width={1920}
          height={1080}
          sizes="(max-width: 768px) 1110px, 100vw"
          priority
        />
      </div>
      <section className="relative z-10">
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

        <ServicesOffer data={data} />

        {service.deliverables && service.deliverables.length > 0 && (
          <ServiceDeliverables
            title={service.deliverablesTitle}
            description={service.deliverablesDescription}
            deliverables={service.deliverables}
          />
        )}
      </section>
    </section>
  );
};

export default ServiceDetailsContent;
