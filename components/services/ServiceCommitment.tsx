import React from "react";
import Image, { StaticImageData } from "next/image";
import DescriptionHeader from "../common/DescriptionHeader";
import { images } from "@/services";

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

const commitmentCards: CommitmentCard[] = [
  {
    title: "Communication",
    description:
      "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
    image: images.belowCard,
    bgColor: "#3654FF",
    textColor: "#86C9FF",
    imageAlt: "Communication notification",
  },
  {
    title: "We don't hide",
    description:
      "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
    image: images.belowContent,
    bg: images.belowBg1,
    bgColor: "#86C9FF",
    textColor: "#3654FF",
    imageAlt: "Code transparency",
  },
  {
    title: "Growth Focused UX",
    description:
      "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
    image: images.belowUser,
    bgColor: "#86C9FF",
    textColor: "#3654FF",
    imageAlt: "UX Designer profile",
  },
  {
    innerText: "Trust Netro Systems <br> because we care your money!",
    bg: images.belowBg,
    bgColor: "#3654FF",
    textColor: "#86C9FF",
  },
];

const ServiceCommitment = () => {
  return (
    <section className="bg-darkPurplebg py-8 md:py-12 lg:py-16">
      <div className="container">
        {/* Header */}
        <DescriptionHeader
          title="Our commitment"
          text="As an organization we are committed to deliver best practiced software solution to you. It’s not only quality we maintain, It’s commitment we have. Always!"
          className="mb-12 md:mb-16"
          descriptionClassName="max-w-full"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {commitmentCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl px-6 md:px-7 lg:px-9 py-8 md:py-10 lg:py-16 flex flex-col justify-center overflow-hidden relative"
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
