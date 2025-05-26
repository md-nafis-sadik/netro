import { fetchWithDelay } from "@/lib/apiHandler";
import { Fragment } from "react";
import ProjectsGallery from "./ProjectsGallery";

const ProjectsGalleryWrapper = async ({ query }: { query: string }) => {
  let portfolios = (await fetchWithDelay(`/portfolios/all`)) as any;

  return (
    <Fragment>
      <ProjectsGallery data={portfolios?.data} query={query} />
    </Fragment>
  );
};

export default ProjectsGalleryWrapper;
