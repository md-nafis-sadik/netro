"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

export const useNavbarColorDetection = (pathname: string) => {
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateNavbarColor = () => {
      const sections =
        document.querySelectorAll<HTMLElement>("[data-bg-theme]");
      const navbarHeight = 80; // adjust if your navbar height is different
      let currentSection: HTMLElement | null = null;
      let maxTop = -Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Section's top is at or above the navbar's bottom
        if (rect.top <= navbarHeight && rect.top > maxTop) {
          maxTop = rect.top;
          currentSection = section;
        }
      });

      // If no section is above the navbar, use the first section
      if (!currentSection && sections.length > 0) {
        currentSection = sections[0];
      }

      if (currentSection) {
        const bgTheme = currentSection.getAttribute("data-bg-theme");
        setIsDarkBackground(bgTheme === "dark");
      }
    };

    const handleScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateNavbarColor);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run on mount
    updateNavbarColor();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const toolbar = document.querySelector<HTMLElement>(".main-tool-bar");
    if (!toolbar) {
      return;
    }

    let rafId: number | null = null;
    let lastScrollY = window.scrollY;
    let isHidden = false;

    const animateNavbar = (hide: boolean) => {
      if (hide === isHidden) {
        return;
      }

      isHidden = hide;
      gsap.to(toolbar, {
        yPercent: hide ? -150 : 0,
        opacity: hide ? 0 : 1,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const updateNavbarVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        animateNavbar(false);
        lastScrollY = 0;
        return;
      }

      if (currentScrollY > lastScrollY + 2 && currentScrollY > 20) {
        animateNavbar(true);
      } else if (currentScrollY < lastScrollY - 2) {
        animateNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    const onScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateNavbarVisibility);
    };

    gsap.set(toolbar, { yPercent: 0, opacity: 1 });
    updateNavbarVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      gsap.killTweensOf(toolbar);
      gsap.set(toolbar, { yPercent: 0, opacity: 1 });
    };
  }, [pathname]);

  return { isDarkBackground, isScrolled };
};
