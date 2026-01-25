"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const ProjectDetails = ({ project }: any) => {
  const sectionRef = useRef<HTMLElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Breadcrumb animation
      gsap.from(breadcrumbRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title animation with split text effect
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      // Image animation with scale effect
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          y: 40,
          duration: 1.2,
          delay: 0.7,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [project]);

  return (
    <section ref={sectionRef} className="font-inter mt-[-60px]">
      <div
        className="pt-4 lg:pt-48"
        style={{
          backgroundImage: `url('${project?.data?.backgroundImageUrl}')`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="container overflow-hidden">
          <div
            ref={breadcrumbRef}
            className="flex items-center gap-2 text-white"
          >
            <span>Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 0L10.1607 5.83927L16 8L10.1607 10.1607L8 16L5.83927 10.1607L0 8L5.83927 5.83927L8 0Z"
                fill="#FFC400"
              />
            </svg>
            <span className="font-semibold">
              {project?.data?.title || "Portfolio Title Not Found"}
            </span>
          </div>
          <div
            ref={titleRef}
            className="portfolio_details_header text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold w-fit text-start leading-[120%] mt-4"
          >
            {project?.data?.title || "Portfolio Title Not Found"}
          </div>

          <p
            ref={subtitleRef}
            className="font-inter text-sm md:text-xl lg:text-2xl font-normal md:font-light !leading-[1.4] text-start text-white mt-2"
          >
            {project?.data?.subtitle || "Portfolio Subtitle Not Found"}
          </p>
          {project?.data?.topImage && (
            <div ref={imageRef}>
              <Image
                src={project?.data?.topImage}
                alt={project?.data?.title || "Portfolio Background"}
                width={1176}
                height={648}
                className="w-full -mb-28 mt-14"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
