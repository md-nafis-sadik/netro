import JournalGallerySkeleton from "@/components/journal/JournalGallerySkeleton";
import JournalGalleryWrapper from "@/components/journal/JournalGalleryWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { Suspense } from "react";

const JournalPage = () => {
  return (
    <main className="relative">
      <PageThumbnail
        title="Our Journal"
        description="Latest Insights & Innovation"
        titleClassName="text-[#1D1D1D]"
      />

      <hr className="h-[1px] border border-dashed border-natural-300" />

      <Suspense fallback={<JournalGallerySkeleton />}>
        <JournalGalleryWrapper />
      </Suspense>
    </main>
  );
};

export default JournalPage;
