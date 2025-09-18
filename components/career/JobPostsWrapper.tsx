import { fetchWithDelay } from "@/lib/apiHandler";
import React from "react";
import JobPosts from "./JobPosts";

type JobsResponse = {
  data: any[];
};

const JobPostsWrapper = async () => {
  let jobs = (await fetchWithDelay(`/jobs/all`)) as JobsResponse;
  const activeJobs = jobs?.data?.filter(
    (item: any) => item?.status === "active"
  );

  return <JobPosts jobs={activeJobs} />;
};

export default JobPostsWrapper;
