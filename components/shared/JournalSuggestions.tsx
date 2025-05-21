"use client";
import { cn } from "@/lib/utils";
import JournalCard from "../journal/JournalCard";
import { journalData } from "@/services/data";
import useEmblaCarousel from "embla-carousel-react";

interface IFProps {
  className?: string;
}

const JournalSuggestions = ({ className }: IFProps) => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div
      className={cn("w-full mt-10 md:mt-20 overflow-hidden", className)}
      ref={emblaRef}
    >
      <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10">
        {journalData.map(({ title, date, image, link }, index) => (
          <JournalCard
            key={index}
            title={title}
            date={date}
            image={image}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default JournalSuggestions;
