"use client";

import { useIntroAnimation } from "@/hooks/useIntroAnimation";
import { images } from "@/services";
import { countries } from "@/services/data/countries";
import Image, { StaticImageData } from "next/image";
import NumberCounter from "../animations/NumberCounter";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DescriptionHeader from "../common/DescriptionHeader";
import { AppLogoIcon } from "@/services/assets/svgs";
import { cn } from "@/lib/utils";

interface IntroItem {
  id: string | number;
  image: { src: string };
}

interface CountryItem {
  code: string;
  name: string;
  image: { src: string };
}

interface SupportAvatar {
  src: string;
  alt: string;
  fallback: string;
}

interface CardData {
  value: number;
  suffix?: string;
  duration?: number;
  title: string;
  description: string;
  backgroundImage?: StaticImageData;
}

interface CustomCardGridProps {
  // Header
  headerTitle?: string;
  headerVariant?: "default" | "dark" | "blue" | "gradient";
  headerText?: string;
  showIntroText?: boolean;
  // Logo and intro
  logoIcon?: React.ComponentType<{ className?: string }>;
  logoImage?: StaticImageData;
  introText?: string;
  introItems?: IntroItem[];

  // Card 1 - Projects Delivered
  card1?: CardData;

  // Card 2 - Support
  card2?: {
    title: string;
    description: string;
    avatars?: SupportAvatar[];
  };

  // Card 3 - Countries
  card3?: {
    title: string;
    description: string;
    countries?: CountryItem[];
  };

  // Card 4 - Client Satisfaction
  card4?: CardData;

  // Card 5 - Positive Outcomes
  card5?: CardData;
  className?: string;
}

function CustomCardGrid({
  headerTitle = "The result",
  headerVariant = "dark",
  headerText = "",
  logoIcon: LogoIcon = AppLogoIcon,
  logoImage = images.logo,
  introText = "We are Netro Systems fosters innovation, collaboration, diversity, and growth, creating impactful software solutions in a vibrant, inclusive culture.",
  introItems = [],
  card1 = {
    value: 70,
    suffix: "+",
    duration: 5,
    title: "Projects Delivered",
    description:
      "Including FinTech, SaaS, Telecom,\nHealthCare,\nAI technology, MVP, eCommerce and many",
    backgroundImage: images.about3,
  },
  card2 = {
    title: "Support 24/7, Guaranteed!",
    description:
      "From deployment to production our dedicated team ensures your support.",
    avatars: [
      { src: images.support1.src, alt: "postman icon", fallback: "PM" },
      { src: images.support2.src, alt: "integration icon", fallback: "SE" },
      { src: images.support3.src, alt: "Jira icon", fallback: "JS" },
    ],
  },
  card3 = {
    title: "Our Clients in 19+ Countries",
    description:
      "We collaborate with startups and businesses across the US, Europe, and Asia.",
    countries: countries,
  },
  card4 = {
    value: 99,
    suffix: "%",
    duration: 5,
    title: "Client Satisfaction",
    description:
      "Rated 4.85 over all the platforms. Over the time we have ensured exactly what your business aims for.",
    backgroundImage: images.about4,
  },
  card5 = {
    value: 35,
    suffix: "X",
    duration: 5,
    title: "Positive Outcomes",
    description:
      "Your investment on scalable software always pay backs with great ROI.",
    backgroundImage: images.about5,
  },
  showIntroText = false,
  className = "",
}: CustomCardGridProps) {
  const {
    sectionRef,
    introTextRef,
    card1Ref,
    card2Ref,
    card3Ref,
    card4Ref,
    card5Ref,
    aboutRef,
    logoIconRef,
  } = useIntroAnimation();

  return (
    <section
      ref={sectionRef}
      data-bg-theme="light"
      className={cn("py-10 md:py-15 font-inter overflow-hidden", className)}
    >
      <div className="container">
        {headerTitle && (
          <DescriptionHeader
            title={headerTitle}
            variant={headerVariant}
            text={headerText}
          />
        )}
        {showIntroText && (
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 items-center md:items-start justify-between">
            {LogoIcon && <LogoIcon className="w-28 shrink-0" />}

            {introText && (
              <div
                ref={introTextRef}
                className="text-lg sm:text-xl md:text-2xl 2xl:text-4xl font-normal align-middle leading-[110%] max-w-[994px] ml-auto text-center md:text-left"
              >
                {introText.split(" ").map((word, index) => {
                  if (word === "[LOGO]" && logoImage) {
                    return (
                      <Image
                        key={index}
                        ref={logoIconRef}
                        src={logoImage}
                        className="size-5 sm:size-7 xl:size-12 object-contain inline-block logo-icon"
                        alt="logo icon"
                        title="logo icon"
                      />
                    );
                  }
                  if (
                    word === "[AVATAR]" &&
                    introItems &&
                    introItems.length > 0
                  ) {
                    return (
                      <Avatar
                        key={index}
                        ref={aboutRef}
                        className="inline-flex items-center xl:-mt-4 translate-y-1 xl:translate-y-3 relative rounded-none size-5 sm:size-7 xl:size-12"
                      >
                        {introItems.map((item) => (
                          <Image
                            key={item.id}
                            src={item.image.src}
                            alt="tech icon"
                            className="absolute inset-0 object-contain opacity-0 intro-about"
                            fill
                          />
                        ))}
                      </Avatar>
                    );
                  }
                  return word + " ";
                })}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-10 grid-rows-5 gap-4 mt-11">
          {/* Card 1 - Projects Delivered */}
          {card1 && (
            <div
              ref={card1Ref}
              className="row-span-2 lg:col-span-3 lg:row-span-5 flex flex-col justify-between gap-14 lg:gap-6 p-3 sm:p-4 md:p-6 relative"
            >
              <p className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
                <NumberCounter
                  value={card1.value}
                  duration={card1.duration || 5}
                  className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50"
                />
                {card1.suffix && <span>{card1.suffix}</span>}
              </p>
              <div className="relative z-50">
                <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                  {card1.title}
                </p>
                <p className="line-clamp-3 text-[0.5rem] sm:text-sm md:text-base text-text-700 leading-[120%] mt-1 sm:mt-2">
                  {card1.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < card1.description.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              {card1.backgroundImage && (
                <Image
                  src={card1.backgroundImage}
                  alt={card1.title}
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />
              )}
            </div>
          )}

          {/* Card 2 - Support 24/7 */}
          {card2 && (
            <div
              ref={card2Ref}
              className="col-span-2 lg:col-span-4 lg:col-start-4 flex items-center justify-between gap-3 border border-black-50 px-3 sm:px-4 md:px-6 py-3 sm:py-5"
            >
              <div>
                <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                  {card2.title}
                </p>
                <p className="line-clamp-2 text-[0.5rem] sm:text-xs md:text-sm text-text-700 leading-[120%] mt-1">
                  {card2.description}
                </p>
              </div>
              {card2.avatars && card2.avatars.length > 0 && (
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                  {card2.avatars.map((avatar, index) => (
                    <Avatar key={index} className="size-6 md:size-8 lg:size-10">
                      <AvatarImage src={avatar.src} alt={avatar.alt} />
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Card 3 - Countries */}
          {card3 && (
            <div
              ref={card3Ref}
              className="row-span-2 lg:row-span-1 lg:col-span-7 col-start-2 lg:col-start-4 lg:row-start-5 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-6 border border-black-50 px-3 sm:px-4 md:px-6 py-3 sm:py-5"
            >
              <div>
                <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                  {card3.title}
                </p>
                <p className="text-[0.5rem] sm:text-xs md:text-sm text-text-700 leading-[120%] mt-1">
                  {card3.description}
                </p>
              </div>
              {card3.countries && card3.countries.length > 0 && (
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale border rounded-full p-1">
                  {card3.countries.map((country) => (
                    <Avatar
                      className="size-6 md:size-8 lg:size-10 object-contain"
                      key={country.code}
                    >
                      <AvatarImage src={country.image.src} alt={country.name} />
                      <AvatarFallback>{country.code}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Card 4 - Client Satisfaction */}
          {card4 && (
            <div
              ref={card4Ref}
              className="row-span-2 row-start-4 lg:col-span-4 lg:row-span-3 col-start-1 lg:col-start-4 lg:row-start-2 flex flex-col justify-between gap-14 lg:gap-6 px-3 sm:px-4 md:px-6 py-3 sm:py-5 relative"
            >
              <p className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
                <NumberCounter
                  value={card4.value}
                  duration={card4.duration || 5}
                  className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50"
                />
                {card4.suffix && <span>{card4.suffix}</span>}
              </p>
              <div className="relative z-50">
                <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                  {card4.title}
                </p>
                <p className="line-clamp-3 text-[0.5rem] sm:text-sm md:text-base text-text-700 leading-[120%] mt-1 sm:mt-2">
                  {card4.description}
                </p>
              </div>
              {card4.backgroundImage && (
                <Image
                  src={card4.backgroundImage}
                  alt={card4.title}
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />
              )}
            </div>
          )}

          {/* Card 5 - Positive Outcomes */}
          {card5 && (
            <div
              ref={card5Ref}
              className="row-span-2 col-start-2 lg:col-span-3 lg:row-span-4 lg:col-start-8 row-start-1 flex flex-col justify-between gap-14 lg:gap-6 p-3 sm:p-4 md:p-6 relative"
            >
              <p className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
                <NumberCounter
                  value={card5.value}
                  duration={card5.duration || 5}
                  className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50"
                />
                {card5.suffix && <span>{card5.suffix}</span>}
              </p>
              <div className="relative z-50">
                <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                  {card5.title}
                </p>
                <p className="line-clamp-3 text-[0.5rem] sm:text-sm md:text-base text-text-700 leading-[120%] mt-1 sm:mt-2">
                  {card5.description}
                </p>
              </div>
              {card5.backgroundImage && (
                <Image
                  src={card5.backgroundImage}
                  alt={card5.title}
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomCardGrid;
