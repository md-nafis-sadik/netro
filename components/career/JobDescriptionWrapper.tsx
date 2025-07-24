import { fetchWithDelay } from "@/lib/apiHandler";
import JobDescription from "./JobDescription";

const JobDescriptionWrapper = async ({ id }: { id: string }) => {
  let job = await fetchWithDelay(`/jobs/find/${id}`);

  return <JobDescription job={job} />;
};

export default JobDescriptionWrapper;
