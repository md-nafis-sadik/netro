import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useHeroAnimation = () => {
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  /* ---------- TITLE ANIMATION ---------- */
  useGSAP(() => {
    if (!titleRef.current) return;

    const titleElements = titleRef.current.querySelectorAll(".title-line");
    // Set initial state
    gsap.set(titleElements, {
      autoAlpha: 0,
      y: 60,
      rotateX: -90,
    });

    // Animate in
    gsap.to(titleElements, {
      autoAlpha: 1,
      y: 0,
      rotateX: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
      delay: 0.3,
    });
  }, []);

  /* ---------- DESCRIPTION ANIMATION ---------- */
  useGSAP(() => {
    if (!descriptionRef.current) return;

    gsap.set(descriptionRef.current, {
      autoAlpha: 0,
      y: 30,
    });

    gsap.to(descriptionRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.9,
    });
  }, []);

  /* ---------- AVATAR/CAROUSEL ANIMATION ---------- */
  useGSAP(() => {
    if (!avatarRef.current) return;

    const images = avatarRef.current.querySelectorAll(".hero-avatar");
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

    return () => {
      masterTimeline.kill();
    };
  }, []);

  return {
    avatarRef,
    titleRef,
    descriptionRef,
  };
};
