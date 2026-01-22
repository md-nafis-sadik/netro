import { portfolios } from "@/services/data/portfolio.data";
import { Fragment } from "react";
import ProjectsGallery from "./ProjectsGallery";

const ProjectsGalleryWrapper = async ({ query }: { query: string }) => {
  return (
    <Fragment>
      <ProjectsGallery data={portfolios} query={query} />
    </Fragment>
  );
};

export default ProjectsGalleryWrapper;
