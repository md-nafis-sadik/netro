import { fetchWithDelay } from "@/lib/apiHandler";
import ProjectsPreviewServices from "./ProjectsPreviewServices";

const ProjectsPreviewServicesWrapper = async () => {
  let portfolios = (await fetchWithDelay(`/portfolios/all`)) as any;

  return <ProjectsPreviewServices data={portfolios?.data} />;
};

export default ProjectsPreviewServicesWrapper;
