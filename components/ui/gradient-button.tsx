"use client";
import React from "react";
import "@/styles/animation.css";
import { cn } from "@/lib/utils";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  nonGradient?: boolean;
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      children,
      className = "",
      containerClassName = "",
      nonGradient = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "inline-block p-[2px] rounded-full bg-gradient hover:-translate-y-[2px] transition_common group !shrink-0",
          containerClassName,
          nonGradient ? "bg-[#161616]" : "btn-animate-gradient"
        )}
      >
        <button
          ref={ref}
          className={cn(
            className,
            "flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold transition-all duration-300 group-hover:!bg-main-500 font-inter !shrink-0"
          )}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }
);

GradientButton.displayName = "GradientButton";
