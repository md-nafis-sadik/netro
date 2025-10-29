import JobPostItem from "./JobPostItem";

function JobPosts({ jobs }: any) {
  const filteredJobs = jobs?.filter(
    (item: any) => Date.now() <= Date.parse(item?.deadline)
  );

  return (
    <section className="border-t border-dashed border-natural-300 pt-10 sm:pt-12 md:pt-15 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
      <div className="containerX">
        {filteredJobs?.length ? (
          <div className="divide-y divide-dashed divide-natural-300">
            {filteredJobs?.map((item: any) => (
              <JobPostItem key={item?._id} item={item} />
            ))}
          </div>
        ) : (
          <p className="font-inter text-center text-2xl font-semibold py-20">
            No opening available right now.
          </p>
        )}
      </div>
    </section>
  );
}

export default JobPosts;
