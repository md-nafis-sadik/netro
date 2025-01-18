"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import { journalData } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import JournalCard from "./JournalCard";

const OurJournal = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="bg-white flex_center flex-col my-20 w-full">
      <SectionSubHeader text="Our Journal" />
      <SectionHeader dark text="Latest Insights" />

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
      </div>
    </section>
  );
};

export default OurJournal;
