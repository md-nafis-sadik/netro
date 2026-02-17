import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

export const useProjectAnimation = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".stacked-card");
      const total = cards.length;
      const scaleDecay = 0;

      cards.forEach((card, i) => {
        const reversedIndex = total - 1 - i;

        // Stack setup - initial positions
        gsap.set(card, {
          y: i * 50,
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
          onLeave: () => {},
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

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (cardsRef.current?.contains(trigger.vars.trigger as Element)) {
            trigger.kill();
          }
        });
      };
    },
    { scope: cardsRef },
  );

  return {
    cardsRef,
    activeIndex,
  };
};
