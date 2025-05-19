"use client";
import SectionHeaderAnimated from "@/components/common/SectionHeaderAnimated";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import { projectsData } from "@/services/data";
import ProjectCard from "./ProjectHomeCard";
import SectionHeader from "../common/SectionHeader";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectsHome = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".stacked-card");

      // Set initial Y offsets
      gsap.set(cards, {
        y: (_, i) => i * 20,
        zIndex: (_, i) => cards.length - i,
      });

      // Scroll listener
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const cardOffset = 100; // Customize how fast cards shift on scroll

        cards.forEach((card, i) => {
          const scale = 1 - i * 0.05;
          const yOffset = scrollY * 0.2 - i * cardOffset;

          gsap.to(card, {
            y: yOffset,
            scale,
            duration: 0.5,
            ease: "power3.out",
          });
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    { scope: cardsRef }
  );

  return (
    <section className="bg-black w-full py-20 relative">
      <div className="containerX flex_center flex-col">
        <SectionSubHeader dark text="Explore Projects" />

        <SectionHeader className="home_projects_header">
          Projects That Speak <br /> for Themselves
        </SectionHeader>

        <div className="flex flex-col gap-6 md:gap-10 mt-10 md:mt-20 w-full relative">
          {projectsData.map((item, index) => (
            <ProjectCard
              className="stacked-card w-full"
              item={item}
              top={(index + 1) * 50}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
