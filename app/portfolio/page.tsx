import ProjectFilterItemSkeleton from "@/components/projects/ProjectFilterItemSkeleton";
import ProjectFilterItemWrapper from "@/components/projects/ProjectFilterItemWrapper";
import ProjectsGallerySkeleton from "@/components/projects/ProjectsGallerySkeleton";
import ProjectsGalleryWrapper from "@/components/projects/ProjectsGalleryWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { Suspense } from "react";

async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ filtered_by?: string }>;
}) {
  const query = (await searchParams)?.filtered_by || "All";

  return (
    <main className="relative mt-[60px]">
      <PageThumbnail
        title="Our Projects"
        description="showcase"
        titleClassName="our_projects_header"
      />
      <div className="containerX">
        <Suspense fallback={<ProjectFilterItemSkeleton />}>
          <ProjectFilterItemWrapper query={query} />
        </Suspense>
        <Suspense fallback={<ProjectsGallerySkeleton />}>
          <ProjectsGalleryWrapper query={query} />
        </Suspense>
      </div>
    </main>
  );
}

export default PortfolioPage;
