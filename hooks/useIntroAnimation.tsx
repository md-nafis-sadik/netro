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
  const logoIconRef = useRef<HTMLImageElement>(null);

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

    const images = aboutRef.current.querySelectorAll(".intro-about");
    if (images.length === 0) return;

    const totalImages = images.length;
    const switchInterval = 3; // Duration to show each image (seconds)
    const animationDuration = 0.6; // Duration of the animation itself
    const masterTimeline = gsap.timeline({ repeat: -1 }); // -1 means infinite loop

    const buildCarouselSequence = () => {
      for (let i = 0; i < totalImages; i++) {
        const currentIdx = i;
        const nextIdx = (i + 1) % totalImages;
        const currentImage = images[currentIdx] as HTMLElement;
        const nextImage = images[nextIdx] as HTMLElement;
        const delayBeforeNewImage = 0.15;

        // Set up z-index for this animation cycle
        masterTimeline.set(
          nextImage,
          { zIndex: 10 },
          currentIdx === 0 ? 1.5 : undefined, // First animation starts after title animations
        );
        masterTimeline.set(currentImage, { zIndex: 5 }, "<");

        // Current image shrinks
        masterTimeline.to(
          currentImage,
          {
            scale: 0,
            opacity: 0,
            duration: animationDuration,
            ease: "power2.in",
          },
          currentIdx === 0 ? 1.5 : undefined,
        );

        // Next image appears and scales up (starts before current finishes)
        masterTimeline.fromTo(
          nextImage,
          {
            opacity: 0,
            scale: 0,
            x: 40,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: animationDuration,
            ease: "power2.out",
          },
          currentIdx === 0
            ? `1.5+${delayBeforeNewImage}`
            : `-=${animationDuration - delayBeforeNewImage}`,
        );

        // Hold the next image visible for switchInterval duration
        masterTimeline.to(nextImage, { opacity: 1 }, `+=${switchInterval}`);
      }
    };

    // Set initial state - first image visible
    gsap.set(images, {
      opacity: 0,
      scale: 0.3,
      x: 0,
    });

    gsap.set(images[0], {
      opacity: 1,
      scale: 1,
      zIndex: 5,
    });

    buildCarouselSequence();

    // Logo icon animation
    if (logoIconRef.current) {
      gsap.fromTo(
        logoIconRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out",
          scrollTrigger: {
            trigger: logoIconRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Continuous gentle rotation on hover
      logoIconRef.current.addEventListener("mouseenter", () => {
        gsap.to(logoIconRef.current, {
          rotation: 360,
          duration: 0.8,
          ease: "power2.inOut",
        });
      });
    }

    return () => {
      masterTimeline.kill();
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
    logoIconRef,
  };
};
