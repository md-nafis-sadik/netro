"use client";
import { useStaggerReveal } from "@/hooks/useAnimation";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface DescriptionBoxesProps {
  detailPoints: any[];
  variant?: "white" | "dark" | "blue" | "gradient"; // Named variants
  title?: string;
  className?: string;
  boxClassName?: string;
}

const variantStyles = {
  white: {
    border: "border-[#97C0FF] bg-[#EBF5FF]",
    title: "text-[#888]",
    subpoint: "text-black font-normal text-sm md:text-base lg:text-lg",
  },
  dark: {
    border: "border-gray-700",
    title: "text-gray-300",
    subpoint: "text-gray-100",
  },
  blue: {
    border: "border-[#20338F]",
    title: "text-[#3654FF]",
    subpoint: "text-white",
  },
  gradient: {
    border: "border-transparent",
    title: "text-white",
    subpoint: "text-white",
  },
};

const DescriptionBoxes = ({
  variant = "white",
  title = "",
  className = "",
  detailPoints = [],
  boxClassName,
}: DescriptionBoxesProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useStaggerReveal(containerRef, {});
  const currentVariant = variantStyles[variant];

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-9 mt-6 md:mt-8 lg:mt-10 text-center",
        className,
      )}
    >
      {detailPoints.map((point: any, index: number) => (
        <div
          key={index}
          className={cn("last:col-span-2 lg:last:col-span-1", boxClassName)}
        >
          <div
            className={cn(
              "border border-dashed px-2.5 py-6 h-full lg:h-auto",
              currentVariant.border,
            )}
          >
            <p
              className={cn(
                "text-xs md:text-sm uppercase mb-2",
                currentVariant.title,
              )}
            >
              {point?.title || title}
            </p>
            {point?.points?.map((subPoint: string, subIndex: number) => (
              <p
                key={subIndex}
                className={cn(
                  "text-sm md:text-lg lg:text-xl font-semibold lg:font-bold leading-[140%]",
                  currentVariant.subpoint,
                )}
              >
                {subPoint}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionBoxes;
