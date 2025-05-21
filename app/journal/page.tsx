"use client";
import JournalCard from "@/components/journal/JournalCard";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { journalData } from "@/services/data";
import { journalCategories } from "@/services/data/journal.data";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";

const JournalPage = () => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <main className="relative">
      <PageThumbnail
        title="Our Journal"
        description="Latest Insights & Innovation"
        titleClassName="text-[#1D1D1D]"
      />

      <hr className="h-[1px] border border-dashed border-natural-300" />

      <section className="containerX my-6 md:my-10 mt-[70px] mb-20 ">
        <div className="flex flex-row gap-10 md:gap-20">
          {/* LEFT PORTION */}
          <div className="w-3/5 flex flex-col gap-7 md:gap-10">
            {journalData.map(({ title, date, image, link }, index) => (
              <JournalCard
                key={index}
                title={title}
                date={date}
                image={image}
                link={link}
                classNameImageContainer="h-[360px] md:h-[416px] w-full"
              />
            ))}
          </div>

          {/* RIGHT PORTION */}
          <div className="w-2/5 flex flex-col gap-8 md:gap-[52px]">
            <div className="w-full border border-dashed border-neutral-300 p-10">
              <p className="title text-5xl font-bold !leading-[0.9] text-black">
                Categories
              </p>

              <hr className="h-[1px] my-6 border border-dashed border-natural-300" />

              <div className="flex flex-col">
                {journalCategories.map(({ title, slug }, index) => (
                  <a
                    key={index}
                    href={`/journal/${slug}`}
                    className="text-sm md:text-lg font-semibold !leading-[1.2] text-black my-6 hover:text-primary-600 transition_common flex flex-row items-center gap-2"
                  >
                    <ChevronRight size={24} />
                    <span className="hover:underline">{title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MORE SUGGESTED ARTICLES */}
        <div className="w-full mt-10 md:mt-20" ref={emblaRef}>
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
      </section>
    </main>
  );
};

export default JournalPage;
