import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const useIntroAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && introTextRef.current) {
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

    // Avatar cycling animation ============
    if (!aboutRef.current) return;
    const avatars = aboutRef.current.querySelectorAll(".intro-about");
    if (avatars.length === 0) return;
    // Set all avatars to invisible initially except the first one
    gsap.set(avatars, { autoAlpha: 0 });
    gsap.set(avatars[0], { autoAlpha: 1, x: 0, y: 0, scale: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    avatars.forEach((avatar, i) => {
      const nextAvatar = avatars[(i + 1) % avatars.length];

      // Add delay only for display time, not on repeat
      if (i === 0) {
        tl.to({}, { duration: 2 }); // Initial delay for first avatar
      } else {
        tl.to({}, { duration: 2 }); // Delay between transitions
      }

      // Animate current avatar going down and fading out
      tl.to(avatar, {
        y: 50,
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.in",
      });

      // Animate next avatar coming from right and popping in
      tl.fromTo(
        nextAvatar,
        {
          x: 50,
          y: -20,
          autoAlpha: 0,
          scale: 0.7,
        },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.1",
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return {
    sectionRef,
    introTextRef,
    card1Ref,
    card2Ref,
    card3Ref,
    card4Ref,
    card5Ref,
    aboutRef,
  };
};
