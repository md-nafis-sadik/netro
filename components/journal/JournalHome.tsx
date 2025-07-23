"use client";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import useEmblaCarousel from "embla-carousel-react";
import JournalCard from "./JournalCard";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import SectionHeader from "../common/SectionHeader";
import { timestampDisplay } from "@/services";
import { useRouter } from "next/navigation";
import { routes } from "@/services/data/shared.data";

const OurJournal = ({ data }: any) => {
  const router = useRouter();
  const options = { align: "start", loop: false } as const;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="bg-white flex_center flex-col my-20 w-full">
      <SectionSubHeader text="Our Journal" />
      <SectionHeader className="home_journal_header mt-6">
        Latest Insights
      </SectionHeader>

      <div className="containerX w-full overflow-hidden mt-5 md:mt-10">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-6 md:gap-10 py-5 md:py-10">
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
            See all products
          </ArrowLineupButton>
        </div>
      </div>
    </section>
  );
};

export default OurJournal;
