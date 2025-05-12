"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";
import React, { useCallback } from "react";

interface IFGoTopButtonProps {
  className?: string;
}

const GoTopButton = ({ className }: IFGoTopButtonProps) => {
  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      gsap.to(document.documentElement, {
        scrollTop: 0,
        duration: 3.5,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <button
      className={cn(
        "border border-[#E8E8E8] p-3 flex flex-row items-center justify-center gap-1 md:gap-2 rounded-full group hover:shadow-sm transition_common",
        className
      )}
      onClick={scrollToTop}
    >
      <ArrowUp
        color="#343434"
        className="h-4 md:h-5 w-4 md:w-5 relative top-0 group-hover:-top-1 transition_common"
      />
      <p className="text-[#343434] text-base font-semibold !leading-[1.6]">
        Go to Top
      </p>
    </button>
  );
};

export default GoTopButton;
