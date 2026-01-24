"use client";

import { images } from "@/services";
import { AppLogoIcon } from "@/services/assets/svgs";
import { countries } from "@/services/data/countries";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function IntroHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin section and animate text color letter by letter
    if (sectionRef.current && introTextRef.current) {
      // Helper function to recursively wrap text nodes in spans
      const wrapTextNodes = (element: HTMLElement) => {
        const childNodes = Array.from(element.childNodes);
        const spans: HTMLSpanElement[] = [];

        childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            const text = node.textContent;
            const fragment = document.createDocumentFragment();

            text.split("").forEach((char) => {
              const span = document.createElement("span");
              span.textContent = char;
              span.style.color = "#888";
              span.className = "char-animate";
              fragment.appendChild(span);
              spans.push(span);
            });

            node.parentNode?.replaceChild(fragment, node);
          } else if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.nodeName !== "IMG"
          ) {
            spans.push(...wrapTextNodes(node as HTMLElement));
          }
        });

        return spans;
      };

      const allSpans = wrapTextNodes(introTextRef.current);

      if (allSpans.length > 0) {
        // Create ScrollTrigger for pinning
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 10%",
          end: `+=${Math.max(allSpans.length * 10, 2000)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const charsToColor = Math.floor(progress * allSpans.length);

            allSpans.forEach((span, index) => {
              if (index < charsToColor) {
                gsap.set(span, { color: "#000" });
              } else {
                gsap.set(span, { color: "#888" });
              }
            });
          },
        });
      }
    }

    const cards = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref];

    cards.forEach((cardRef, index) => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            y: 100,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-bg-theme="light"
      className="py-10 md:py-15 font-inter overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 items-center md:items-start justify-between">
          <AppLogoIcon className="w-28 shrink-0" />
          <div
            ref={introTextRef}
            className="text-lg sm:text-xl md:text-2xl 2xl:text-4xl font-normal align-middle leading-[110%] max-w-[994px] ml-auto text-center md:text-left"
          >
            We are{" "}
            <Image
              src={images.logo}
              className="size-5 sm:size-7 xl:size-12 object-contain inline-block"
              alt="logo icon"
              title="logo icon"
            />
            Netro Systems fosters innovation, collaboration, diversity, and
            growth, creating{" "}
            <div className="inline-flex items-center -space-x-3 xl:-mt-4 translate-y-1 xl:translate-y-3">
              <Image
                src={images.about1}
                className="size-5 sm:size-7 xl:size-12 object-contain shrink-0"
                alt="logo icon"
                title="logo icon"
              />

              <Image
                src={images.about2}
                className="size-5 sm:size-7 xl:size-12 object-contain shrink-0 drop-shadow-intro"
                alt="logo icon"
                title="logo icon"
              />
            </div>
            impactful software solutionsin a vibrant, inclusive culture.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-10 grid-rows-5 gap-4 mt-11">
          {/* Projects Delivered */}
          <div
            ref={card1Ref}
            className="row-span-2 lg:col-span-3 lg:row-span-5 flex flex-col justify-between gap-14 lg:gap-6 p-3 sm:p-4 md:p-6 relative"
          >
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
              70+
            </h3>
            <div className="relative z-50">
              <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Projects Delivered
              </p>
              <p className="line-clamp-3 text-[0.5rem] sm:text-sm md:text-base text-text-700 leading-[120%] mt-1 sm:mt-2">
                Including FinTech, SaaS, Telecom,
                <br /> HealthCare, <br />
                AI technology, MVP, eCommerce and many
              </p>
            </div>
            <Image
              src={images.about3}
              alt="projects delivered"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
          </div>
          {/* Support 24/7, Guaranteed! */}
          <div
            ref={card2Ref}
            className="col-span-2 lg:col-span-4 lg:col-start-4 flex items-center justify-between gap-3 border border-black-50 px-3 sm:px-4 md:px-6 py-3 sm:py-5"
          >
            <div>
              <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Support 24/7, Guaranteed!
              </p>
              <p className="line-clamp-2 text-[0.5rem] sm:text-xs md:text-sm text-text-700 leading-[120%] mt-1">
                From deployment to production our dedicated team ensures your
                support.
              </p>
            </div>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar className="size-6 md:size-8 lg:size-10">
                <AvatarImage src={images.support1.src} alt="postman icon" />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <Avatar className="size-6 md:size-8 lg:size-10">
                <AvatarImage src={images.support2.src} alt="integration icon" />
                <AvatarFallback>SE</AvatarFallback>
              </Avatar>
              <Avatar className="size-6 md:size-8 lg:size-10">
                <AvatarImage src={images.support3.src} alt="Jira icon" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {/* Our Clients in 19+ Countries */}
          <div
            ref={card3Ref}
            className="row-span-2 lg:row-span-1 lg:col-span-7 col-start-2 lg:col-start-4 lg:row-start-5 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-6 border border-black-50 px-3 sm:px-4 md:px-6 py-3 sm:py-5"
          >
            <div>
              <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Our Clients in 19+ Countries
              </p>
              <p className="text-[0.5rem] sm:text-xs md:text-sm text-text-700 leading-[120%] mt-1">
                We collaborate with startups and businesses across the US,
                Europe, and Asia.
              </p>
            </div>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale border rounded-full p-1">
              {countries?.map((country) => (
                <Avatar
                  className="size-6 md:size-8 lg:size-10 object-contain"
                  key={country?.code}
                >
                  <AvatarImage src={country?.image.src} alt={country?.name} />
                  <AvatarFallback>{country?.code}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          {/* Client Satisfaction */}
          <div
            ref={card4Ref}
            className="row-span-2 row-start-4 lg:col-span-4 lg:row-span-3 col-start-1 lg:col-start-4 lg:row-start-2 flex flex-col justify-between gap-14 lg:gap-6  px-3 sm:px-4 md:px-6 py-3 sm:py-5 relative"
          >
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
              99%
            </h3>
            <div className="relative z-50">
              <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Client Satisfaction
              </p>
              <p className="line-clamp-3 text-[0.5rem] sm:text-sm md:text-base text-text-700 leading-[120%] mt-1 sm:mt-2">
                Rated 4.85 over all the platforms. Over the time we have ensured
                exactly what your business aims for.
              </p>
            </div>
            <Image
              src={images.about4}
              alt="projects delivered"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
          </div>
          {/* Positive Outcomes */}
          <div
            ref={card5Ref}
            className="row-span-2 col-start-2 lg:col-span-3 lg:row-span-4 lg:col-start-8 row-start-1 flex flex-col justify-between gap-14 lg:gap-6 p-3 sm:p-4 md:p-6 relative"
          >
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
              35X
            </h3>
            <div className="relative z-50">
              <p className="text-xs sm:text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Positive Outcomes
              </p>
              <p className="line-clamp-3 text-[0.5rem] sm:text-sm md:text-base text-text-700 leading-[120%] mt-1 sm:mt-2">
                Your investment on scalable software always pay backs with great
                ROI.
              </p>
            </div>
            <Image
              src={images.about5}
              alt="projects delivered"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroHome;
