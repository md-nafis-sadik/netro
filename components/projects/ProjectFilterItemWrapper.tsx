import ProjectFilterItems from "./ProjectFilterItems";
import { portfolioCategories } from "@/services/data/portfolio.data";

interface IProjectFilterItems {
  query?: string;
}

const ProjectFilterItemWrapper = async ({ query }: IProjectFilterItems) => {
  return (
    <ProjectFilterItems
      categoryData={portfolioCategories}
      query={query as string}
    />
  );
};

export default ProjectFilterItemWrapper;
