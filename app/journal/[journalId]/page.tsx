import SectionHeader from "@/components/common/SectionHeader";
import JournalSuggestions from "@/components/shared/JournalSuggestions";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { getGeneratedMetadata } from "@/lib/metadata";
import { images, purifyUrl } from "@/services";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { JournalId: string[] };
}) {
  let { JournalId } = params;
  const JournalIdStr = JournalId.join("/");
  const id = purifyUrl({ urlString: JournalIdStr });
  const url = `/blogs/find-by-title/${id}`;
  return await getGeneratedMetadata({
    apiUrl: url,
    metaTitle: id,
    path: `/blogs/${JournalIdStr}`,
  });
}

const JournalDetailsPage = async ({
  params,
}: {
  params: Promise<{ journalId: string }>;
}) => {
  const { journalId: rawJournalId } = await params;
  let journalId = Array.isArray(rawJournalId)
    ? rawJournalId.join("/")
    : rawJournalId;
  journalId = purifyUrl({ urlString: journalId });

  console.log(journalId);

  return (
    <main className="relative">
      <PageThumbnail
        title="Why DesignRush Is Our Trusted Partner for Design & Development Excellence"
        description="Thu Nov 07 2024"
        titleClassName="text-[#1D1D1D] text-[48px] md:text-[64px] lg:text-[96px]"
      />

      <div className="relative h-[300px] md:h-[420px] lg:h-[600px] w-full overflow-hidden">
        <Image
          src={images.blog1}
          alt="topic image 1"
          className="absolute_center min-h-full min-w-full"
          height={1280}
          width={1920}
        />
      </div>

      <section className="containerX pt-10 md:pt-20 pb-5 md:pb-10">
        <SectionHeader className="journal_suggestions_header w-full !text-center">
          Related Posts
        </SectionHeader>

        {/* MORE SUGGESTED ARTICLES */}
        <JournalSuggestions className="!mt-5 md:!mt-10" />
      </section>
    </main>
  );
};

export default JournalDetailsPage;
