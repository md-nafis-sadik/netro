"use client";
import React, { useState } from "react";
import { socialsData } from "@/services/data/shared.data";
import { cn } from "@/lib/utils";

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
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      className={cn(
        `group h-12 rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg shrink-0 transition-all duration-300 font-inter`,
        expanded ? "bg-main-600" : "bg-main-950"
      )}
    >
      <div
        className={cn("flex items-center px-[14px]", expanded ? `gap-2` : "")}
      >
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded
              ? "max-w-[200px] opacity-100 pl-2"
              : "max-w-0 opacity-0 pl-0"
          }`}
        >
          <span className="text-white font-bold whitespace-nowrap inline-block">
            {text}
          </span>
        </div>
        <div className="shrink-0 text-white flex items-center justify-center">
          {icon}
        </div>
      </div>
    </a>
  );
};

const ExpandableButtonList = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4 mt-8 md:mt-10",
        className
      )}
    >
      {socialsData.map((social, index) => (
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
