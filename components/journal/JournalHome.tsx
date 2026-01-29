"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { timestampDisplay } from "@/services";
import { routes } from "@/services/data/shared.data";
import SectionHeader from "../common/SectionHeader";
import JournalCard from "./JournalCard";
import { useAppearanceAnimation } from "@/hooks/useAppearanceAnimation";

const OurJournal = ({ data }: any) => {
  // const options = { align: "start", loop: false } as const;
  // const [emblaRef] = useEmblaCarousel(options);
  const sectionRef = useAppearanceAnimation(".animate-item-card", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-white flex_center flex-col my-20 w-full"
    >
      <SectionSubHeader text="Latest about" />
      <SectionHeader className="home_journal_header_v2 text-5xl md:text-[96px] mt-2">
        Blogs & Updates
      </SectionHeader>

      <div className="container w-full overflow-hidden mt-5 md:mt-10">
        <div className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-5 md:py-10">
            {data?.map((item: any, index: number) => (
              <JournalCard
                index={index}
                key={index}
                title={item?.title}
                date={timestampDisplay(item?.publishedAt)}
                image={item?.featuredImage}
                link={`/journal/${item?.title}`}
              />
            ))}
          </div>
        </div>

        <div className="flex_center">
          <ArrowLineupButton
            lineColor={colors.secondary[300]}
            textClassName="text-text-900"
            className="mt-10 md:mt-20"
            href={routes.journal.link}
          >
            See our latest posts
          </ArrowLineupButton>
        </div>
      </div>
    </section>
  );
};

export default OurJournal;
