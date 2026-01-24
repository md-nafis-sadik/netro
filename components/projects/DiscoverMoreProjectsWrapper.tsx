import { portfolios } from "@/services/data/portfolio.data";
import DiscoverMoreProjects from "./DiscoverMoreProjects";

const DiscoverMoreProjectsWrapper = async ({ id }: { id: string }) => {
  const portfolioData = portfolios.filter((p) => p._id !== id);

  return <DiscoverMoreProjects data={portfolioData} />;
};

export default DiscoverMoreProjectsWrapper;
