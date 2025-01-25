"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import useEmblaCarousel from "embla-carousel-react";
import JournalCard from "./JournalCard";
import { journalData } from "@/services/data";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";

const OurJournal = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="bg-white flex_center flex-col my-20 w-full">
      <SectionSubHeader text="Our Journal" />
      <SectionHeader dark text="Latest Insights" className="mt-6" />

      <div className="containerX w-full overflow-x-hidden overflow-y-visible mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
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

        <div className="flex_center">
          <ArrowLineupButton
            lineColor={colors.secondary[300]}
            textClassName="text-text-900"
            className="mt-10 md:mt-20"
          >
            See all products
          </ArrowLineupButton>
        </div>
      </div>
    </section>
  );
};

export default OurJournal;
