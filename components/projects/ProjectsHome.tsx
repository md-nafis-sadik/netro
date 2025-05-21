"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import { projectsData } from "@/services/data";
import ProjectCard from "./ProjectHomeCard";
import SectionHeader from "../common/SectionHeader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectsHome = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".stacked-card");
      const total = cards.length;
      const scaleDecay = 0.05;

      cards.forEach((card, i) => {
        const reversedIndex = total - 1 - i;

        // Stack setup - initial positions
        gsap.set(card, {
          y: i * 100 - 20,
          scale: 1,
          zIndex: i,
        });

        // Create ScrollTrigger for each card
        const trigger = ScrollTrigger.create({
          trigger: card,
          start: "top center+=100",
          end: "bottom top+=100",
          scrub: 0.1,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * scaleDecay * (reversedIndex + 1);

            gsap.to(card, {
              scale,
              transition: "none",
            });
          },
          // Important: This ensures the ScrollTrigger initializes properly on page load
          invalidateOnRefresh: true,
        });

        // Force immediate refresh/update to handle page loads at non-zero scroll positions
        trigger.refresh();
      });

      // Force immediate update of all ScrollTriggers to account for initial scroll position
      ScrollTrigger.refresh();

      // Add a small delay to make sure ScrollTrigger has properly initialized
      setTimeout(() => {
        // Update each card based on current scroll position
        cards.forEach((card, i) => {
          const cardTrigger =
            ScrollTrigger.getById(card.id) ||
            ScrollTrigger.getAll().find((st) => st.trigger === card);

          if (cardTrigger) {
            const reversedIndex = total - 1 - i;
            const progress = cardTrigger.progress;
            const scale = 1 - progress * scaleDecay * (reversedIndex + 1);

            // Set the initial scale based on current scroll position
            gsap.set(card, {
              scale,
            });
          }
        });
      }, 100);
    },
    { scope: cardsRef }
  );

  return (
    <section className="bg-black w-full py-20 relative">
      <div className="containerX flex_center flex-col">
        <SectionSubHeader dark text="Explore Projects" />

        <SectionHeader className="home_projects_header pb-10 md:pb-28">
          Projects That Speak <br /> for Themselves
        </SectionHeader>

        <div
          ref={cardsRef}
          className="flex flex-col gap-6 md:gap-10 mb-40 w-full relative"
        >
          {projectsData.map((item, index) => (
            <ProjectCard
              className="w-full stacked-card sticky left-0 top-10 mb-80"
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
