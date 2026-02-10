"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import DescriptionHeader from "../common/DescriptionHeader";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";
import { ServiceAtGlanceItem } from "@/services/types";

interface ServiceAtGlanceProps {
  items: ServiceAtGlanceItem[];
  title: string;
  description: string;
}

const ServiceAtGlance = ({ items, title, description }: ServiceAtGlanceProps ) => {
  const sectionRef = useAppearanceAnimation(".animate-glance", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.1,
  });

  const renderCard = (item: ServiceAtGlanceItem, index: number, isMobile = false) => (
    <div
      key={`card-${index}`}
      className={`rounded-xl ${isMobile ? 'p-6' : 'p-6 lg:p-9'} flex flex-col animate-glance`}
      style={{
        backgroundColor: item.bgColor,
        color: item.textColor,
      }}
    >
      <div className={`${isMobile ? 'text-5xl' : 'text-2xl lg:text-5xl'} font-bold mb-4 uppercase !leading-[90%] font-scoutcond`}>
        {item.title}
      </div>
      <ul className={isMobile ? 'space-y-0.5' : 'space-y-2'}>
        {item.items.map((listItem, idx) => (
          <li key={idx} className={`${isMobile ? 'text-sm' : 'text-base lg:text-xl'} flex items-start`}>
            <span className="mr-2">•</span>
            <span>{listItem}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderImage = (item: ServiceAtGlanceItem, index: number, isMobile = false) => (
    <div
      key={`image-${index}`}
      className="relative w-full aspect-[576/536] rounded-xl overflow-hidden animate-glance"
    >
      <Image
        src={item.image as StaticImageData}
        alt="Service illustration"
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-darkPurplebg py-10 lg:py-28 overflow-hidden">
      <div className="container">
        {/* Header */}
        <DescriptionHeader
          title={title}
          text={description}
          descriptionClassName="max-w-full"
          className="mb-8 lg:mb-14"
        />


        {/* Desktop Grid - Checkerboard */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <>
                  {renderImage(item, index)}
                  {renderCard(item, index)}
                </>
              ) : (
                <>
                  {renderCard(item, index)}
                  {renderImage(item, index)}
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-4">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {renderCard(item, index, true)}
              {renderImage(item, index, true)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAtGlance;
