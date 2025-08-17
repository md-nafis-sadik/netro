import SectionHeader from "@/components/common/SectionHeader";
import JournalDetailsSkeleton from "@/components/journal/JournalDetailsSkeleton";
import JournalDetailsWrapper from "@/components/journal/JournalDetailsWrapper";
import JournalSuggestionWrapper from "@/components/journal/JournalSuggestionWrapper";
import { getGeneratedMetadata } from "@/lib/metadata";
import { purifyUrl } from "@/services";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ journalId: string | string[] }>;
}) {
  const { journalId } = await params;
  const journalIdStr = Array.isArray(journalId)
    ? journalId.join("/")
    : journalId;
  const id = purifyUrl({ urlString: journalIdStr });
  const url = `/blogs/find-by-title/${id}`;
  return await getGeneratedMetadata({
    apiUrl: url,
    metaTitle: id,
    path: `/blogs/${journalIdStr}`,
  });
}

const JournalDetailsPage = async ({
  params,
}: {
  params: Promise<{ journalId: string | string[] }>;
}) => {
  const { journalId } = await params;
  const journalIdString = Array.isArray(journalId)
    ? journalId.join("/")
    : journalId;
  const purifiedId = purifyUrl({ urlString: journalIdString });

  return (
    <main className="relative mt-20">
      <Suspense fallback={<JournalDetailsSkeleton />}>
        <JournalDetailsWrapper id={purifiedId as string} />
      </Suspense>

      <section className="containerX pt-10 md:pt-20 pb-5 md:pb-10">
        <SectionHeader className="journal_suggestions_header w-full !text-center">
          Related Posts
        </SectionHeader>

        {/* MORE SUGGESTED ARTICLES */}
        <Suspense fallback={<JournalDetailsSkeleton />}>
          <JournalSuggestionWrapper />
        </Suspense>
      </section>
    </main>
  );
};

export default JournalDetailsPage;
