import React from "react";
import Image from "next/image";

interface CommitmentCard {
  title: string;
  description: string;
  image?: string;
  bgColor: string;
  textColor: string;
  imageAlt?: string;
}

const commitmentCards: CommitmentCard[] = [
  {
    title: "Communication",
    description:
      "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
    image: "/images/commitment-communication.png",
    bgColor: "#6B8CFF",
    textColor: "#FFFFFF",
    imageAlt: "Communication notification",
  },
  {
    title: "We don't hide",
    description:
      "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
    image: "/images/commitment-transparency.png",
    bgColor: "#B8E5FF",
    textColor: "#1E3A8A",
    imageAlt: "Code transparency",
  },
  {
    title: "Growth Focused UX",
    description:
      "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
    image: "/images/commitment-ux.png",
    bgColor: "#B8E5FF",
    textColor: "#1E3A8A",
    imageAlt: "UX Designer profile",
  },
  {
    title: "Trust Netro Systems because we care your money!",
    description: "",
    bgColor: "#6B8CFF",
    textColor: "#FFFFFF",
  },
];

const ServiceCommitment = () => {
  return (
    <section className="bg-[#0A0A1F] py-16 md:py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-white mb-4 md:mb-6">
            OUR COMMITMENT
          </h2>
          <p className="text-[#A5A5BA] text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            As an organization we are committed to deliver best practiced
            software solution to you. It&apos;s not only quality we maintain, it&apos;s
            commitment we have. Always!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {commitmentCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[400px]"
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
              }}
            >
              {/* Image Section */}
              {card.image && (
                <div className="mb-6">
                  <div className="relative w-full h-32 md:h-40 bg-white/10 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        {/* Placeholder for actual image */}
                        <div className="w-full h-full bg-white/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className={card.image ? "" : "flex items-center justify-center h-full"}>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                      {card.description}
                    </p>
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
