import SectionHeader from "@/components/common/SectionHeader";
import JournalDetailsSkeleton from "@/components/journal/JournalDetailsSkeleton";
import JournalDetailsWrapper from "@/components/journal/JournalDetailsWrapper";
import JournalSuggestionWrapper from "@/components/journal/JournalSuggestionWrapper";
import JournalSuggestions from "@/components/shared/JournalSuggestions";
import { fetchWithDelay } from "@/lib/apiHandler";
import { getGeneratedMetadata } from "@/lib/metadata";
import { purifyUrl } from "@/services";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { journalId: string[] };
}) {
  const { journalId } = params;
  const journalIdStr = journalId.join("/");
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
  params: Promise<{ journalId: string }>;
}) => {
  let { journalId } = await params;
  journalId = Array.isArray(journalId) ? journalId.join("/") : journalId;
  journalId = purifyUrl({ urlString: journalId });

  return (
    <main className="relative">
      <Suspense fallback={<JournalDetailsSkeleton />}>
        <JournalDetailsWrapper id={journalId} />
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
