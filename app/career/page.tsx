import CareerTeams from "@/components/career/CareerTeams";
import JobPostsSkeleton from "@/components/career/JobPostsSkeleton";
import JobPostsWrapper from "@/components/career/JobPostsWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import ViewAbout from "@/components/view/ViewAbout";
import { Suspense } from "react";

function Career() {
  return (
    <main className="mt-[60px]">
      <PageThumbnail
        title="Current openings"
        description="Available Opportunities"
      />
      <Suspense fallback={<JobPostsSkeleton />}>
        <JobPostsWrapper />
      </Suspense>
      <CareerTeams />
      <ViewAbout />
    </main>
  );
}

export default Career;
