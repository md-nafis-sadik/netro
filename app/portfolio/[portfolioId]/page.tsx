import dynamic from "next/dynamic";
import { Suspense } from "react";
import { purifyUrl } from "@/services";
import { getPortfolioById, portfolios } from "@/services/data/portfolio.data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomCardGrid from "@/components/shared/CustomCardGrid";
import DiscoverMoreProjects from "@/components/projects/DiscoverMoreProjects";
import ContactUsFormHome from "@/components/contact-us/ContactUsFormHome";
import Loading from "@/app/loading";
import InlineLoader from "@/components/common/InlineLoader";
import PortfolioPageWrapper from "@/components/projects/PortfolioPageWrapper";

// Shared loader factory
const createLoader = (h: string) => {
  const LoaderComponent = () => <InlineLoader h={h} />;
  LoaderComponent.displayName = `InlineLoader(${h})`;
  return LoaderComponent;
};

// Dynamic imports with shared loaders
const ProjectDetails = dynamic(() => import("@/components/projects/ProjectDetails"), { loading: createLoader("240px") });
const ProjectDescription = dynamic(() => import("@/components/projects/ProjectDescription"), { loading: createLoader("180px") });
const ProjectSolution = dynamic(() => import("@/components/projects/ProjectSolution"), { loading: createLoader("180px") });
const ProjectBranding = dynamic(() => import("@/components/projects/ProjectBranding"), { loading: createLoader("180px") });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ portfolioId: string }>;
}): Promise<Metadata> {
  const portfolio = getPortfolioById(purifyUrl({ urlString: (await params).portfolioId }));
  
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
  const portfolioId = purifyUrl({ urlString: (await params).portfolioId });
  const portfolioData = getPortfolioById(portfolioId);

  if (!portfolioData) notFound();

  const portfolioDetails = { data: portfolioData };
  const morePortfolioData = portfolios.filter((p) => p._id !== portfolioId).splice(0, 3);
  const { card1, card2, card3, card4, card5 } = portfolioData;

  return (
    <PortfolioPageWrapper portfolio={portfolioData}>
      <main className="mt-[60px]">
        <Suspense fallback={<Loading />}>
          <ProjectDetails project={portfolioDetails} />
          <ProjectDescription project={portfolioDetails} />
          <ProjectSolution project={portfolioDetails} />
          <ProjectBranding project={portfolioDetails} />
          <CustomCardGrid
            card1={card1}
            card2={card2}
            card3={card3}
            card4={card4}
            card5={card5}
            className="py-12 md:py-24 lg:py-32"
          />
          <ContactUsFormHome />
          <DiscoverMoreProjects data={morePortfolioData} />
        </Suspense>
      </main>
    </PortfolioPageWrapper>
  );
}

export default PortfolioDetails;
