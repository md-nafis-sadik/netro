"use client";
import { useAnimation } from "@/hooks/useAnimation";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface DescriptionHeaderProps {
  text?: string;
  variant?: "default" | "dark" | "blue" | "gradient";
  className?: string;
  title?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const DescriptionHeader = ({
  text = "",
  variant = "default",
  className = "",
  title = "",
  titleClassName = "",
  descriptionClassName = "",
}: DescriptionHeaderProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  // useAnimation(titleRef, {
  //   y: 40,
  // });
  // useAnimation(textRef, {
  //   y: 40,
  // });
  const variantClasses = {
    default: {
      title: "text-white",
      description: "text-gray-100",
    },
    dark: {
      title: "text-black",
      description: "text-text-600",
    },
    blue: {
      title: "text-white",
      description: "text-white",
    },
    gradient: {
      title: "text-white",
      description: "text-white",
    },
  };

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      {title && (
        <div ref={titleRef} className="flex-shrink-0">
          <div
            className={cn(
              "text-5xl md:text-[56px] leading-[90%] font-scoutcond font-bold uppercase text-center",
              titleClassName,
              variantClasses[variant].title,
            )}
          >
            {title}
          </div>
        </div>
      )}
      {text && (
        <div
          ref={textRef}
          className={cn(
            "font-inter text-sm md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light !leading-[1.4] text-center max-w-[874px]",
            descriptionClassName,
            variantClasses[variant].description,
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default DescriptionHeader;
