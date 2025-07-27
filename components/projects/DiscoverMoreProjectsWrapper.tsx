import { fetchWithDelay } from "@/lib/apiHandler";
import DiscoverMoreProjects from "./DiscoverMoreProjects";

const DiscoverMoreProjectsWrapper = async ({ id }: { id: string }) => {
  let portfolios = (await fetchWithDelay(`/portfolios/all`)) as any;
  const portfolioData = portfolios?.data?.filter((p: any) => {
    console.log(p._id, id);
    return p._id !== id;
  }); // FIXME: Filter not working

  return <DiscoverMoreProjects data={portfolioData} />;
};

export default DiscoverMoreProjectsWrapper;
