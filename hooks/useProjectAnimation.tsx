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
          invalidateOnRefresh: true,
        });

        trigger.refresh();
      });

      // Collapse animation: cards wrap up from bottom to top
      // (last card collapses first, then second-to-last, etc.)
      if (cards.length > 0) {
        const lastCard = cards[cards.length - 1];

        ScrollTrigger.create({
          trigger: lastCard,
          start: "top center+=100",
          end: "bottom top+=100",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            cards.forEach((card, i) => {
              const initialY = i * 50;

              // Last card (i = total-1) collapses first (startProgress = 0)
              // First card (i = 0) collapses last (startProgress near 1)
              // Use i directly (not reversed) so bottom cards go first
              const collapseOrder = total - 1 - i; // 0 = last card, total-1 = first card
              const startProgress = collapseOrder / total;
              const endProgress = (collapseOrder + 1) / total;

              // Clamp local progress [0, 1] for this card's collapse window
              const localProgress = Math.max(
                0,
                Math.min(
                  1,
                  (progress - startProgress) / (endProgress - startProgress),
                ),
              );

              // Each card collapses toward the last card's initial y position
              // which is (total - 1) * 50 — the bottom of the stack
              const targetY = (total - 1) * 50;
              const currentY = gsap.utils.interpolate(
                initialY,
                targetY,
                localProgress,
              );

              gsap.set(card, { y: currentY });
            });
          },
          invalidateOnRefresh: true,
        });
      }

      ScrollTrigger.refresh();

      setTimeout(() => {
        cards.forEach((card, i) => {
          const cardTrigger =
            ScrollTrigger.getAll().find((st) => st.trigger === card);

          if (cardTrigger) {
            const reversedIndex = total - 1 - i;
            const progress = cardTrigger.progress;
            const scale = 1 - progress * scaleDecay * (reversedIndex + 1);

            gsap.set(card, { scale });
          }
        });
      }, 100);

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