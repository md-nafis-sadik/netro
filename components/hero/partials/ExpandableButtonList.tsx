"use client";
import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { cn } from "@/lib/utils";
import { RightArrowIcon } from "@/services/assets/svgs";
import {
  homeHeroSocialsData,
  tidycalMettingUrl,
} from "@/services/data/shared.data";
import React, { useState } from "react";

interface ExpandableButtonProps {
  link: string;
  icon: React.ReactNode;
  text?: string;
  bgColorDefault?: string;
  bgColorHover?: string;
  expanded?: boolean;
  onHoverChange?: (hovering: boolean) => void;
}

const ExpandableButton: React.FC<ExpandableButtonProps> = ({
  link,
  icon,
  text,
  expanded = false,
  onHoverChange,
}) => {
  const { open } = useTidycalModal();

  const content = (
    <div
      className={cn(
        "flex items-center pl-3.5",
        expanded ? `gap-2 pr-2` : "pr-3.5",
      )}
    >
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "w-[132px] opacity-100 pl-2" : "w-0 opacity-0 pl-0"
        }`}
      >
        <span className="text-black-900 font-medium whitespace-nowrap inline-block">
          {text}
        </span>
      </div>
      <div
        className={cn(
          "shrink-0 text-white flex items-center justify-center",
          expanded ? "p-2 rounded-full bg-main-600" : "",
        )}
      >
        {expanded ? <RightArrowIcon className="size-6" /> : icon}
      </div>
    </div>
  );

  return link === tidycalMettingUrl ? (
    <button
      type="button"
      onClick={open}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      className={cn(
        `group h-12 rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg shrink-0 transition-all duration-300 font-inter`,
        expanded ? "bg-white" : "bg-main-900",
      )}
    >
      {content}
    </button>
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      className={cn(
        `group h-12 rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg shrink-0 transition-all duration-300 font-inter`,
        expanded ? "bg-white" : "bg-main-950",
      )}
    >
      {content}
    </a>
  );
};

const ExpandableButtonList = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-center items-center gap-4 mt-8 md:mt-10",
        className,
      )}
    >
      {homeHeroSocialsData.map((social, index) => (
        <ExpandableButton
          key={index}
          link={social.link}
          icon={social.icon}
          text={social.text}
          expanded={
            hoveredIndex === null ? index === 0 : hoveredIndex === index
          }
          onHoverChange={(hovering) => setHoveredIndex(hovering ? index : null)}
        />
      ))}
    </div>
  );
};

export default ExpandableButtonList;
