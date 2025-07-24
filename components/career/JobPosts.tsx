import JobPostItem from "./JobPostItem";

function JobPosts({ jobs }: any) {
  return (
    <section className="border-t border-dashed border-natural-300 pt-10 sm:pt-12 md:pt-15 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
      <div className="containerX">
        <div className="divide-y divide-dashed divide-natural-300">
          {jobs?.data?.map((item: any) => (
            <JobPostItem key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobPosts;
