import JobPostItem from "./JobPostItem";

function JobPosts() {
  const jobPosts = [
    {
      _id: "1",
      title: "Frontend Developer",
      location: "Remote",
      experience: "2-5 years",
    },
    {
      _id: "2",
      title: "Backend Developer",
      location: "Remote",
      experience: "2-5 years",
    },
    {
      _id: "3",
      title: "Fullstack Developer",
      location: "Remote",
      experience: "2-5 years",
    },
  ];
  return (
    <section className="border-t border-dashed border-natural-300 pt-10 sm:pt-12 md:pt-15 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
      <div className="containerX">
        <div className="divide-y divide-dashed divide-natural-300">
          {jobPosts?.map((item) => (
            <JobPostItem key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobPosts;
