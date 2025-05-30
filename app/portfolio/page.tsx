import ProductFilterItems from "@/components/products/ProductFilterItems";
import ProjectsGallerySkeleton from "@/components/projects/ProjectsGallerySkeleton";
import ProjectsGalleryWrapper from "@/components/projects/ProjectsGalleryWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { fetchWithDelay } from "@/lib/apiHandler";
import { Suspense } from "react";

interface CategoriesResponse {
  data: any;
}

async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ filtered_by?: string }>;
}) {
  const query = (await searchParams)?.filtered_by || "All";

  let categories: CategoriesResponse = (await fetchWithDelay(
    `/portfolio-categories/all`
  )) as CategoriesResponse;

  return (
    <main className="relative">
      <PageThumbnail
        title="Our Projects"
        description="showcase"
        titleClassName="our_projects_header"
      />
      <div className="containerX">
        <ProductFilterItems
          categoryData={categories?.data}
          query={query as string}
        />
        <Suspense fallback={<ProjectsGallerySkeleton />}>
          <ProjectsGalleryWrapper query={query} />
        </Suspense>
      </div>
    </main>
  );
}

export default PortfolioPage;
