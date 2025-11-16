import { fetchWithDelay } from "@/lib/apiHandler";
import JobPosts from "./JobPosts";

type JobsResponse = {
  data: any[];
};

const JobPostsWrapper = async () => {
  let jobs = (await fetchWithDelay(`/jobs/active`)) as JobsResponse;
  return <JobPosts jobs={jobs?.data} />;
};

export default JobPostsWrapper;
