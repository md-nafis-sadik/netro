import { fetchWithDelay } from "@/lib/apiHandler";
import ProjectDetails from "./ProjectDetails";

interface PortfolioDetailsResponse {
  data: any;
  [key: string]: any;
}

const ProjectDetailsWrapper = async ({ id: portfolioId }: { id: string }) => {
  let portfolioDetails = (await fetchWithDelay(
    `/portfolios/find-by-title/${portfolioId}`
  )) as PortfolioDetailsResponse;

  return <ProjectDetails project={portfolioDetails} />;
};

export default ProjectDetailsWrapper;
