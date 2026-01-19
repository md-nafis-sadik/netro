import { cn } from "@/lib/utils";
import React from "react";

interface IFHeader {
  className?: string;
  children: React.ReactNode;
}

const SectionHeader = ({ className, children }: IFHeader) => {
  return (
    <p
      className={cn(
        "text-5xl md:text-8xl font-bold !leading-[0.9] uppercase text-center font-scoutcond mt-10 whitespace-pre-wrap",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default SectionHeader;
