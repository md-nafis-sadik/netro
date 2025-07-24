import CareerTeams from "@/components/career/CareerTeams";
import JobPostsSkeleton from "@/components/career/JobPostsSkeleton";
import JobPostsWrapper from "@/components/career/JobPostsWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import ViewAbout from "@/components/view/ViewAbout";
import { Suspense } from "react";

function Career() {
  return (
    <main className="mt-20 md:mt-24">
      <PageThumbnail
        title="Current openings"
        description="Available Opportunities"
      />
      <Suspense fallback={<JobPostsSkeleton />}>
        <JobPostsWrapper />
      </Suspense>
      <CareerTeams />
      <ViewAbout reverse={true} />
    </main>
  );
}

export default Career;
