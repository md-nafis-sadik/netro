import { fetchWithDelay } from "@/lib/apiHandler";
import ProjectsHome from "./ProjectsHome";

const ProjectsHomeWrapper = async () => {
  let portfolios = await fetchWithDelay(`/portfolios/all`);

  return <ProjectsHome data={portfolios} linkCondition="portfolio" />;
};

export default ProjectsHomeWrapper;
