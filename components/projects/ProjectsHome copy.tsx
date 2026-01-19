"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../common/SectionHeader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ProjectsHomeProps = {
  data: any;
  type?: string; // optional
  linkCondition?: string;
};

const ProjectsHome = ({ data, type, linkCondition }: ProjectsHomeProps) => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".stacked-card");
      const total = cards.length;
      const scaleDecay = 0.075;

      cards.forEach((card, i) => {
        const reversedIndex = total - 1 - i;

        // Stack setup - initial positions
        gsap.set(card, {
          y: i * 60,
          scale: 1,
          zIndex: i,
        });

        // Create ScrollTrigger for each card
        const trigger = ScrollTrigger.create({
          trigger: card,
          start: "top center+=100",
          end: "bottom top+=40",
          scrub: 0.1,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * scaleDecay * (reversedIndex + 1);

            setActiveIndex(i);

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
      <div className="flex_center flex-col">
        {type !== "products" && (
          <SectionSubHeader dark text="Explore Projects" />
        )}

        {type !== "products" && (
          <SectionHeader className="home_projects_header pb-10 md:pb-28">
            Our Projects
          </SectionHeader>
        )}
        {type === "products" && (
          <SectionHeader className="home_projects_header pb-10 md:pb-28">
            Some Key Previews
          </SectionHeader>
        )}

        <div
          ref={cardsRef}
          className="flex flex-col items-center w-full relative"
        >
          {data?.data?.slice(0, 5).map((item: any, index: number) => (
            <ProjectCard
              className={cn(
                "stacked-card sticky left-0 top-0 mb-80 lg:aspect-[21/9]"
              )}
              style={{
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
              item={item}
              key={index}
              linkCondition={linkCondition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
