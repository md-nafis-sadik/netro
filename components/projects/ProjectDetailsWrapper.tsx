import { getPortfolioById } from "@/services/data/portfolio.data";
import ProjectDetails from "./ProjectDetails";
import ProjectsDetailsPreview from "./ProjectsDetailsPreview";
import { notFound } from "next/navigation";
import ProjectDescription from "./ProjectDescription";
import ProjectSolution from "./ProjectSolution";

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
      <ProjectDescription project={portfolioDetails} />
      <ProjectSolution project={portfolioDetails} />
      {/* <ProjectsDetailsPreview project={portfolioDetails} /> */}
    </>
  );
};

export default ProjectDetailsWrapper;
