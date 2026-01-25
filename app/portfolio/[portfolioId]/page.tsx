import dynamic from "next/dynamic";

import { purifyUrl } from "@/services";
import { getPortfolioById } from "@/services/data/portfolio.data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const PulseBlock = ({ className }: { className?: string }) => (
  <div
    className={`w-full min-h-[180px] animate-pulse bg-neutral-900/10 ${className ?? ""}`}
    aria-busy="true"
    aria-live="polite"
  />
);

const ProjectDetails = dynamic(
  () => import("@/components/projects/ProjectDetails"),
  { loading: () => <PulseBlock className="min-h-[240px]" /> },
);

const ProjectDescription = dynamic(
  () => import("@/components/projects/ProjectDescription"),
  { loading: () => <PulseBlock /> },
);

const ProjectSolution = dynamic(
  () => import("@/components/projects/ProjectSolution"),
  { loading: () => <PulseBlock /> },
);

const ProjectBranding = dynamic(
  () => import("@/components/projects/ProjectBranding"),
  { loading: () => <PulseBlock /> },
);

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
  const portfolioData = getPortfolioById(portfolioId);

  if (!portfolioData) {
    notFound();
  }

  const portfolioDetails = {
    data: portfolioData,
  };

  return (
    <main className="mt-[60px]">
      <ProjectDetails project={portfolioDetails} />
      <ProjectDescription project={portfolioDetails} />
      <ProjectSolution project={portfolioDetails} />
      <ProjectBranding project={portfolioDetails} />
    </main>
  );
}

export default PortfolioDetails;
