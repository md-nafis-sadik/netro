import ProjectFilterItems from "./ProjectFilterItems";
import { fetchWithDelay } from "@/lib/apiHandler";

interface IProjectFilterItems {
  query?: string;
}

interface CategoriesResponse {
  data: any;
}

const ProjectFilterItemWrapper = async ({ query }: IProjectFilterItems) => {
  let categories: CategoriesResponse = (await fetchWithDelay(
    `/portfolio-categories/all`
  )) as CategoriesResponse;

  return (
    <ProjectFilterItems
      categoryData={categories?.data}
      query={query as string}
    />
  );
};

export default ProjectFilterItemWrapper;
