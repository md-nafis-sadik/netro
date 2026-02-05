import React from "react";
import Image, { StaticImageData } from "next/image";
import DescriptionHeader from "../common/DescriptionHeader";

interface ServiceAtGlanceItem {
  title: string;
  items: string[];
  bgColor: string;
  textColor: string;
}

interface ServiceAtGlanceProps {
  items: ServiceAtGlanceItem[];
  image: StaticImageData;
}

const ServiceAtGlance = ({ items, image }: ServiceAtGlanceProps) => {
  // Create checkerboard pattern: [Image, Card1], [Card2, Image], [Image, Card3], etc.
  const desktopGrid = [];
  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      // Even index: Image first, then Card
      desktopGrid.push(
        <div
          key={`image-${i}`}
          className="relative w-full aspect-[576/536] rounded-xl overflow-hidden"
        >
          <Image
            src={image}
            alt="Service illustration"
            fill
            className="object-cover"
          />
        </div>
      );
      desktopGrid.push(
        <div
          key={`card-${i}`}
          className="rounded-xl p-6 lg:p-9 flex flex-col"
          style={{
            backgroundColor: items[i].bgColor,
            color: items[i].textColor,
          }}
        >
          <div className="text-xl lg:text-3xl xl:text-[56px] font-bold mb-4 uppercase !leading-[90%] font-scoutcond">
            {items[i].title}
          </div>
          <ul className="space-y-2">
            {items[i].items.map((listItem, idx) => (
              <li
                key={idx}
                className="text-base lg:text-2xl flex items-start"
              >
                <span className="mr-2">•</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      // Odd index: Card first, then Image
      desktopGrid.push(
        <div
          key={`card-${i}`}
          className="rounded-xl p-6 lg:p-9 flex flex-col"
          style={{
            backgroundColor: items[i].bgColor,
            color: items[i].textColor,
          }}
        >
          <div className="text-xl lg:text-3xl xl:text-[56px] font-bold mb-4 uppercase !leading-[90%] font-scoutcond">
            {items[i].title}
          </div>
          <ul className="space-y-2">
            {items[i].items.map((listItem, idx) => (
              <li
                key={idx}
                className="text-base lg:text-2xl flex items-start"
              >
                <span className="mr-2">•</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        </div>
      );
      desktopGrid.push(
        <div
          key={`image-${i}`}
          className="relative w-full aspect-[576/536] rounded-xl overflow-hidden"
        >
          <Image
            src={image}
            alt="Service illustration"
            fill
            className="object-cover"
          />
        </div>
      );
    }
  }

  return (
    <section className="bg-darkPurplebg py-8 md:py-20 lg:py-32">
      <div className="container">
        {/* Header */}
        <DescriptionHeader
          title="SERVICE AT A GLANCE"
          text="AI-Powered Software Engineering is not a generic software
            engineering service what we are offering. It&apos;s a complete AI
            solution for your business or startups."
          descriptionClassName="max-w-full"
          className="mb-6 md:mb-12 lg:mb-16"
        />


        {/* Desktop Grid - Checkerboard */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 md:gap-6">
          {desktopGrid}
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden space-y-4">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {/* Content card */}
              <div
                className="rounded-xl p-6 flex flex-col"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                <div className="text-[48px] font-bold mb-4 uppercase !leading-[90%] font-scoutcond">
                  {item.title}
                </div>
                <ul className="space-y-0.5">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image after each content card */}
              <div className="relative w-full aspect-[576/536] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt="Service illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAtGlance;
