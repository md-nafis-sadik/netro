"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import SectionHeader from "../common/SectionHeader";
import { awardsBgDown, awardsBgUp } from "@/services/assets/images";
import Image from "next/image";
import { images } from "@/services";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";

const AwardsRecognition = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      dragFree: false,
      containScroll: "trimSnaps",
      skipSnaps: false,
    },
    [autoplayPlugin.current],
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  // Use the animation hook for the entire section
  const sectionRef = useAppearanceAnimation(".animate-item", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.1,
  });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#FBE266] w-full pb-10 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20 overflow-hidden"
    >
      {/* Background Pattern - Top Right */}
      <div className="absolute top-0 right-0 w-1/3 md:w-1/4 opacity-30 pointer-events-none animate-item">
        <Image
          src={awardsBgUp}
          alt="Awards background pattern"
          className="w-full h-auto"
        />
      </div>

      {/* Background Pattern - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-1/3 md:w-1/4 opacity-30 pointer-events-none animate-item">
        <Image
          src={awardsBgDown}
          alt="Awards background pattern"
          className="w-full h-auto"
        />
      </div>

      <div className="relative z-10 flex_center flex-col w-full">
        <div>
          <SectionSubHeader
            text="SERVICES"
            className="bg-white text-black border-none"
          />
        </div>

        <div >
          <SectionHeader className="home_journal_header_v2 text-5xl md:text-[96px] mt-5">
            Awards & Recognition
          </SectionHeader>
        </div>

        <div className="containerX mt-8 md:mt-16 lg:mt-20 w-full">
          {/* Desktop XL+: Show 3 items WITHOUT carousel */}
          <div className="hidden xl:flex justify-center items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex justify-center animate-item">
              <Image
                src={images.topClutch}
                alt="Top Clutch award"
                width={590}
                height={694}
                className="max-w-[270px] xl:max-w-[300px] md:mr-9 h-auto object-contain"
              />
            </div>

            <div className="flex justify-center animate-item">
              <Image
                src={images.raterGreat}
                alt="Rater Great award"
                width={590}
                height={694}
                className="max-w-[300px] xl:max-w-[350px] h-auto object-contain"
              />
            </div>

            <div className="flex justify-center animate-item">
              <Image
                src={images.globalAward}
                alt="Global award"
                width={692}
                height={680}
                className="max-w-[400px] xl:max-w-[450px] h-auto object-contain"
              />
            </div>
          </div>
          
          <div
            className="xl:hidden embla overflow-hidden w-full"
            ref={emblaRef}
          >
            <div className="flex w-full">
              {/* Slide 1 */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center px-4">
                <div className="flex justify-center items-center w-full animate-item">
                  <Image
                    src={images.topClutch}
                    alt="Top Clutch award"
                    width={590}
                    height={694}
                    className="w-full max-w-[280px] md:max-w-[300px] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Slide 2 */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center px-4">
                <div className="flex justify-center items-center w-full animate-item">
                  <Image
                    src={images.raterGreat}
                    alt="Rater Great award"
                    width={590}
                    height={694}
                    className="w-full max-w-[320px] md:max-w-[350px] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Slide 3 */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center px-4">
                <div className="flex justify-center items-center w-full animate-item">
                  <Image
                    src={images.globalAward}
                    alt="Global award"
                    width={692}
                    height={680}
                    className="w-full max-w-[380px] md:max-w-[450px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;