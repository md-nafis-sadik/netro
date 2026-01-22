"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { teamData } from "@/services/data/team.data";
import SectionHeader from "../common/SectionHeader";
import TeamCard from "./TeamCard";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const subHeaderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          onEnter: () => setIsAnimated(true),
        },
      });

      tl.from(subHeaderRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(headerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.4)",
      }, "-=0.6")
      .from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .from(buttonRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.4");

      if (window.innerWidth >= 1024) {
        gsap.from(".team-card", {
          y: 100,
          opacity: 0,
          rotationX: 45,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isAnimated) return;

    const checkAndSlide = () => {
      if (window.innerWidth >= 1024) return null;

      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 3000);

      return slideInterval;
    };

    const interval = checkAndSlide();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnimated]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.querySelector('div')?.offsetWidth || 0;
    const gap = 16;
    const totalCards = teamData.length;
    
    const position = -currentSlide * (cardWidth + gap);
    const maxPosition = -(totalCards - 2) * (cardWidth + gap);
    
    if (currentSlide >= totalCards - 1) {
      gsap.to(sliderRef.current, {
        x: position,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(sliderRef.current, { x: 0 });
          setCurrentSlide(0);
        },
      });
    } else {
      gsap.to(sliderRef.current, {
        x: position,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, [currentSlide]);

  return (
    <section
      ref={sectionRef}
      className="flex_center flex-col pb-10 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20 select-none bg-darkPurplebg"
    >
      <div ref={subHeaderRef}>
        <SectionSubHeader text="The force behind" blue />
      </div>

      <div ref={headerRef}>
        <SectionHeader className="home_statistics_header_v2 text-5xl md:text-[96px] mt-1 md:mt-0">
          OUR Teams
        </SectionHeader>
      </div>

      <div className="containerX w-full mt-6 mb-6 md:my-20" ref={cardsRef}>
        <div className="w-full">
          <div className="block lg:hidden overflow-hidden" ref={sliderContainerRef}>
            <div ref={sliderRef} className="flex gap-4">
              {teamData.map(({ image, name, position }, index) => (
                <div
                  key={index}
                  className="w-[calc(50%-8px)] flex-shrink-0"
                >
                  <TeamCard image={image} name={name} position={position} />
                </div>
              ))}
            </div>

            {/* <div className="flex justify-center gap-2 mt-6">
              {teamData.slice(0, teamData.length - 1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide % (teamData.length - 1) === index
                      ? "bg-[#7FFBAF] w-6"
                      : "bg-[#7FFBAF]/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-4 md:gap-6">
            {teamData.map(({ image, name, position }, index) => (
              <div key={index} className="team-card">
                <TeamCard image={image} name={name} position={position} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={buttonRef}>
        <ArrowLineupButton
          lineColor={colors.secondary[300]}
          textClassName="text-white"
        >
          See All
        </ArrowLineupButton>
      </div>
    </section>
  );
};

export default Team;