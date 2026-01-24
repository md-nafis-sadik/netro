import { getPortfolioById } from "@/services/data/portfolio.data";
import ProjectDetails from "./ProjectDetails";
import ProjectsDetailsPreview from "./ProjectsDetailsPreview";
import { notFound } from "next/navigation";

const ProjectDetailsWrapper = async ({ id: portfolioId }: { id: string }) => {
  const portfolioData = getPortfolioById(portfolioId);
  
  if (!portfolioData) {
    notFound();
  }

  const portfolioDetails = {
    data: portfolioData,
  };

  return (
    <>
      <ProjectDetails project={portfolioDetails} />
      <ProjectsDetailsPreview project={portfolioDetails} />
    </>
  );
};

export default ProjectDetailsWrapper;
