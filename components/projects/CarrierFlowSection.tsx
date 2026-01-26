"use client";

import React, { useEffect, useRef } from "react";

interface IFSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const DashedCurvePointerDesktop = ({
  className,
  color = "#FF9F43",
  ...props
}: IFSvgProps) => (
  <svg
    width="423"
    height="447"
    viewBox="0 0 423 447"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      id="desktop-path"
      d="M41.5068 1.48438C115.507 11.9844 243.59 27.5359 340.504 66.4844C436.229 104.955 394.703 177.133 340.504 188.484L61.5042 245.484C-11.3123 261.196 -28.5064 355.484 70.2624 374.196C157.849 390.79 358.817 429.496 422.007 444.984"
      stroke="#FF9F43"
      strokeWidth="3"
      strokeDasharray="8 8"
    />
    <g id="desktop-arrow">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M313.938 196.791C313.579 196.7 313.252 196.514 312.989 196.254C312.725 195.994 312.536 195.669 312.44 195.312C312.345 194.954 312.346 194.578 312.444 194.221C312.542 193.864 312.733 193.54 312.998 193.282L332.15 174.555C333.549 173.188 335.891 174.329 335.676 176.272L334.23 189.473L342.083 200.184C343.241 201.761 341.782 203.919 339.888 203.433L313.937 196.79L313.938 196.791Z"
        fill="#FFC400"
      />
    </g>
  </svg>
);

const DashedCurvePointerMobile = ({
  className,
  color = "#FF9F43",
  ...props
}: IFSvgProps) => (
  <svg
    width="310"
    height="312"
    viewBox="0 0 310 312"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      id="mobile-path"
      d="M198.815 0.462891C236.815 15.9629 182.476 -6.54197 262.206 25.4629C340.957 57.0751 306.794 131.135 262.206 140.463L51.3147 188.963C-8.58987 201.873 -23.9537 250.707 51.3147 284.963C117.745 315.197 62.9622 295.76 116.962 310.963"
      stroke="#FF9F43"
      strokeDasharray="8 8"
    />
    <g id="mobile-arrow">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.107 162.179C171.892 162.124 171.696 162.013 171.538 161.857C171.38 161.701 171.266 161.506 171.209 161.292C171.151 161.077 171.152 160.851 171.211 160.637C171.269 160.423 171.384 160.229 171.543 160.074L183.034 148.838C183.874 148.017 185.279 148.702 185.15 149.868L184.283 157.789L188.994 164.215C189.689 165.161 188.813 166.456 187.677 166.164L172.107 162.178L172.107 162.179Z"
        fill="#FFC400"
      />
    </g>
  </svg>
);

const CarrierFlowSection = ({ items }: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        // Desktop arrow animation
        const desktopPath = document.querySelector(
          "#desktop-path",
        ) as SVGPathElement;
        const desktopArrow = document.querySelector(
          "#desktop-arrow",
        ) as SVGGElement;

        if (desktopPath && desktopArrow) {
          const pathLength = desktopPath.getTotalLength();

          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self: any) => {
                  const progress = self.progress;
                  const point = desktopPath.getPointAtLength(
                    progress * pathLength,
                  );
                  const nextPoint = desktopPath.getPointAtLength(
                    Math.min(progress * pathLength + 2, pathLength),
                  );

                  // Detect scroll direction
                  const currentScrollY = window.scrollY;
                  const isScrollingDown = currentScrollY > lastScrollY.current;
                  lastScrollY.current = currentScrollY;

                  const angle =
                    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                    (180 / Math.PI);
                  // Flip arrow based on scroll direction
                  const adjustedAngle = !isScrollingDown ? angle : angle + 180;

                  gsap.set(desktopArrow, {
                    x: point.x - 327,
                    y: point.y - 188,
                    rotation: adjustedAngle,
                    transformOrigin: "center center",
                  });
                },
              },
            },
          );
        }

        // Mobile arrow animation
        const mobilePath = document.querySelector(
          "#mobile-path",
        ) as SVGPathElement;
        const mobileArrow = document.querySelector(
          "#mobile-arrow",
        ) as SVGGElement;

        if (mobilePath && mobileArrow) {
          const pathLength = mobilePath.getTotalLength();

          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self: any) => {
                  const progress = self.progress;
                  const point = mobilePath.getPointAtLength(
                    progress * pathLength,
                  );
                  const nextPoint = mobilePath.getPointAtLength(
                    Math.min(progress * pathLength + 2, pathLength),
                  );

                  // Detect scroll direction
                  const currentScrollY = window.scrollY;
                  const isScrollingDown = currentScrollY > lastScrollY.current;
                  lastScrollY.current = currentScrollY;

                  const angle =
                    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                    (180 / Math.PI);
                  // Flip arrow based on scroll direction
                  const adjustedAngle = isScrollingDown ? angle : angle + 180;

                  gsap.set(mobileArrow, {
                    x: point.x - 179,
                    y: point.y - 155,
                    rotation: adjustedAngle,
                    transformOrigin: "center center",
                  });
                },
              },
            },
          );
        }
      } catch (error) {
        console.error("Error loading GSAP:", error);
      }
    };

    loadGSAP();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <div className="pt-20" ref={sectionRef}>
      <div className="max-w-[1176px] w-full mx-auto relative">
        {/* Desktop version */}
        <DashedCurvePointerDesktop className="absolute top-10 lg:top-16 left-1/2 translate-x-[-60%] hidden sm:block w-full max-w-[40%] md:max-w-[30%] lg:max-w-[40%] h-[80%]" />

        {/* Mobile version */}
        <DashedCurvePointerMobile className="absolute top-0 left-0 block sm:hidden w-full max-w-[90%] xs:max-w-[50%] h-full" />

        {/* Content items */}
        <div
          className="relative grid grid-rows-4 gap-8 sm:gap-4 md:gap-0"
          style={{ zIndex: 0, height: "100%" }}
        >
          {items.map((item: any, index: number) => (
            <div key={index} className="flex items-start">
              <div
                className={`flex items-start gap-8 ${
                  item.position === "right" ? "sm:ml-auto" : ""
                }`}
              >
                {item.position === "left" && (
                  <div className="flex items-center gap-6 md:gap-10 lg:gap-14 sm:max-w-[450px]">
                    <span className="text-[62px] sm:text-[83px] md:text-[104px] lg:text-[125px] xl:text-[140px] font-bold text-[#FFFCC5] leading-none select-none font-scoutcond">
                      {item.number}
                    </span>
                    <div className="max-w-[340px]">
                      <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
                {item.position === "right" && (
                  <div className="flex items-center gap-6 md:gap-10 lg:gap-14 sm:max-w-[450px]">
                    <span className="text-[62px] sm:text-[83px] md:text-[104px] lg:text-[125px] xl:text-[140px] font-bold text-[#FFFCC5] leading-none select-none font-scoutcond">
                      {item.number}
                    </span>
                    <div className="max-w-[340px]">
                      <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrierFlowSection;
