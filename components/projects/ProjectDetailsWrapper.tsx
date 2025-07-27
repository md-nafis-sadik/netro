import { fetchWithDelay } from "@/lib/apiHandler";
import ProjectDetails from "./ProjectDetails";
import ProjectsDetailsPreview from "./ProjectsDetailsPreview";

interface PortfolioDetailsResponse {
  data: any;
  [key: string]: any;
}

const ProjectDetailsWrapper = async ({ id: portfolioId }: { id: string }) => {
  let portfolioDetails = (await fetchWithDelay(
    `/portfolios/find-by-title/${portfolioId}`
  )) as PortfolioDetailsResponse;

  console.log(portfolioDetails);

  return (
    <>
      <ProjectDetails project={portfolioDetails} />
      <ProjectsDetailsPreview project={portfolioDetails} />
    </>
  );
};

export default ProjectDetailsWrapper;
