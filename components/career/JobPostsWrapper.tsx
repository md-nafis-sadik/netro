import { fetchWithDelay } from "@/lib/apiHandler";
import React from "react";
import JobPosts from "./JobPosts";

const JobPostsWrapper = async () => {
  let jobs = await fetchWithDelay(`/jobs/all`);

  return <JobPosts jobs={jobs} />;
};

export default JobPostsWrapper;
