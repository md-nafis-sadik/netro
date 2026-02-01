import dynamic from "next/dynamic";

import { purifyUrl } from "@/services";
import { getPortfolioById, portfolios } from "@/services/data/portfolio.data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomCardGrid from "@/components/shared/CustomCardGrid";
import DiscoverMoreProjects from "@/components/projects/DiscoverMoreProjects";
import ContactUsFormHome from "@/components/contact-us/ContactUsFormHome";

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

  const morePortfolioData = portfolios
    .filter((p) => p._id !== portfolioId)
    .splice(0, 3);

  return (
    <main className="mt-[60px]">
      <ProjectDetails project={portfolioDetails} />
      <ProjectDescription project={portfolioDetails} />
      <ProjectSolution project={portfolioDetails} />
      <ProjectBranding project={portfolioDetails} />
      <CustomCardGrid
        card1={portfolioDetails?.data?.card1}
        card2={portfolioDetails?.data?.card2}
        card3={portfolioDetails?.data?.card3}
        card4={portfolioDetails?.data?.card4}
        card5={portfolioDetails?.data?.card5}
        className="py-12 md:py-24 lg:py-32"
      />
      <ContactUsFormHome />
      <DiscoverMoreProjects data={morePortfolioData} />
    </main>
  );
}

export default PortfolioDetails;
