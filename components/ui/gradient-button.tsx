"use client";
import React from "react";
import "@/styles/animation.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  nonGradient?: boolean;
  href?: string;
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
      href = "",
      ...props
    },
    ref
  ) => {
    return (
      <Link
        className={cn(
          "block p-[2px] rounded-full bg-gradient-btn hover:-translate-y-[2px] group-hover:!bg-main-500 transition_common group !shrink-0",
          containerClassName,
          nonGradient ? "bg-[#161616]" : "btn-animate-gradient"
        )}
        href={href}
      >
        <button
          ref={ref}
          className={cn(
            className,
            "flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold transition-all duration-300 group-hover:!bg-main-500 group-focus-within:!bg-main-500 font-inter !shrink-0"
          )}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }
);

GradientButton.displayName = "GradientButton";
