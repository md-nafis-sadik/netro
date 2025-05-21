import JournalCard from "@/components/journal/JournalCard";
import JournalSuggestions from "@/components/shared/JournalSuggestions";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { journalData } from "@/services/data";
import { journalCategories } from "@/services/data/journal.data";
import { ChevronRight } from "lucide-react";

const JournalPage = () => {
  return (
    <main className="relative">
      <PageThumbnail
        title="Our Journal"
        description="Latest Insights & Innovation"
        titleClassName="text-[#1D1D1D]"
      />

      <hr className="h-[1px] border border-dashed border-natural-300" />

      <section className="containerX my-6 md:my-10 mt-[70px] mb-20 ">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 xl:gap-20">
          {/* LEFT PORTION */}
          <div className="w-full lg:w-3/5 flex flex-col gap-7 md:gap-10">
            {journalData.map(({ title, date, image, link }, index) => (
              <JournalCard
                key={index}
                title={title}
                date={date}
                image={image}
                link={link}
                imageContainerClassName="h-[360px] md:h-[416px] w-full"
              />
            ))}
          </div>

          {/* RIGHT PORTION */}
          <div className="w-full lg:w-2/5 flex flex-col gap-8 md:gap-[52px] relative">
            {/* FEATURED */}
            <div className="w-full border border-dashed border-neutral-300 p-6 lg:p-10">
              <p className="title text-5xl font-bold !leading-[0.9] text-black">
                Featured
              </p>

              <hr className="h-[1px] my-6 border border-dashed border-natural-300" />

              <div className="flex flex-col gap-7 md:gap-10">
                {journalData.map(({ title, date, image, link }, index) => (
                  <JournalCard
                    key={index}
                    title={title}
                    date={date}
                    image={image}
                    link={link}
                    imageContainerClassName="!h-[77px] !min-w-[112px] !w-[112px]"
                    className="flex flex-row items-center gap-6"
                    titleClassName="text-sm sm:text-base md:!text-sm lg:text-lg font-bold !leading-[1.4]"
                    contentContainerClassName="!pt-0"
                  />
                ))}
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="w-full border border-dashed border-neutral-300 p-6 lg:p-10 sticky top-10">
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
        <JournalSuggestions />
      </section>
    </main>
  );
};

export default JournalPage;
