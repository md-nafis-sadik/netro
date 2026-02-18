"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Kill all ScrollTrigger instances before navigation
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // Small delay to ensure new page components mount, then refresh
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
