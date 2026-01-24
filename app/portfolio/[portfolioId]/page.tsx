import DiscoverMoreProjectsSkeleton from "@/components/projects/DiscoverMoreProjectsSkeleton";
import DiscoverMoreProjectsWrapper from "@/components/projects/DiscoverMoreProjectsWrapper";
import ProjectDetailsSkeleton from "@/components/projects/ProjectDetailsSkeleton";
import ProjectDetailsWrapper from "@/components/projects/ProjectDetailsWrapper";
import { getPortfolioById } from "@/services/data/portfolio.data";
import { purifyUrl } from "@/services";
import { Suspense } from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ portfolioId: string }>;
}): Promise<Metadata> {
  const { portfolioId } = await params;
  const purifiedPortfolioId = purifyUrl({ urlString: portfolioId });
  const portfolio = getPortfolioById(purifiedPortfolioId);

  if (!portfolio) {
    return {
      title: "Portfolio Not Found",
    };
  }

  return {
    title: portfolio.metaTitle || portfolio.title,
    description: portfolio.metaDescription,
  };
}

async function PortfolioDetails({
  params,
}: {
  params: Promise<{ portfolioId: string }>;
}) {
  let { portfolioId } = await params;
  portfolioId = purifyUrl({ urlString: portfolioId });

  return (
    <main className="mt-[60px]">
      <Suspense fallback={<ProjectDetailsSkeleton />}>
        <ProjectDetailsWrapper id={portfolioId} />
      </Suspense>
      <Suspense fallback={<DiscoverMoreProjectsSkeleton />}>
        <DiscoverMoreProjectsWrapper id={portfolioId} />
      </Suspense>
    </main>
  );
}

export default PortfolioDetails;

