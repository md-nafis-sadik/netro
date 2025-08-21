"use client"

import { useEffect, useState } from "react";

export const useNavbarColorDetection = (pathname: string) => {
    const [isDarkBackground, setIsDarkBackground] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bgTheme = entry.target.getAttribute("data-bg-theme");
                        setIsDarkBackground(bgTheme === "dark");
                    }
                });
            },
            {
                rootMargin: "-80px 0px -50% 0px",
                threshold: 0,
            }
        );

        const sections = document.querySelectorAll("[data-bg-theme]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    return isDarkBackground;
};