"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import DescriptionHeader from "../common/DescriptionHeader";

interface CommitmentCard {
  title?: string;
  description?: string;
  image?: StaticImageData;
  bg?: StaticImageData;
  bgColor: string;
  textColor: string;
  imageAlt?: string;
  innerText?: string;
}

interface ServiceCommitmentProps {
  title: string;
  description: string;
  cards: CommitmentCard[];
}

const ServiceCommitment = ({
  title,
  description,
  cards: commitmentCards,
}: ServiceCommitmentProps) => {
  return (
    <section className="bg-darkPurplebg py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="container">
        {/* Header */}
        <DescriptionHeader
          title={title}
          text={description}
          className="mb-12 md:mb-16"
          descriptionClassName="max-w-full"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {commitmentCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl px-6 md:px-7 lg:px-9 py-8 md:py-10 lg:py-16 flex flex-col justify-center overflow-hidden min-h-[328px] relative"
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
              }}
            >
              {card.bg && (
                <div className="absolute inset-0 z-10 left-0">
                  <Image
                    src={card.bg}
                    alt={card.imageAlt || card.title || "Background image"}
                    width={1420}
                    height={1582}
                    className="object-contain"
                  />
                </div>
              )}
              {/* Image Section */}
              {card.image && (
                <div className="mb-6 relative z-20">
                  {/* Placeholder for actual image */}
                  <Image
                    src={card.image}
                    alt={card.imageAlt || card.title || "image"}
                    width={960}
                    height={178}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Content Section */}
              <div
                className={
                  card.image
                    ? "relative z-20"
                    : "flex items-center justify-center h-full relative z-20"
                }
              >
                <div className="">
                  <div className="text-2xl md:text-3xl lg:text-5xl leading-[110%] font-bold mb-[10px]">
                    {card.title}
                  </div>
                  {card.description && (
                    <div className="text-xs md:text-sm lg:text-base leading-[120%]">
                      {card.description}
                    </div>
                  )}
                  {card.innerText && (
                    <div
                      className="text-2xl lg:text-[28px] font-bold leading-[140%] text-center"
                      dangerouslySetInnerHTML={{ __html: card.innerText }}
                      suppressHydrationWarning
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCommitment;
