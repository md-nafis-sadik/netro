import gsap from "gsap";
import { useEffect, useRef } from "react";

export const useHeroAnimation = () => {
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  /* ---------- TITLE ANIMATION ---------- */
  useEffect(() => {
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
  useEffect(() => {
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

  /* ---------- AVATAR AUTO CYCLE ---------- */
  useEffect(() => {
    if (!avatarRef.current) return;

    const avatars = avatarRef.current.querySelectorAll(".hero-avatar");

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
    avatarRef,
    titleRef,
    descriptionRef,
  };
};
