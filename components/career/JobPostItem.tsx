import Link from "next/link";

function JobPostItem({
  item,
}: {
  item: {
    _id: string;
    title: string;
    location: string;
    experience: string;
  };
}) {
  return (
    <div className="flex items-center gap-6 sm:hover:bg-natural-100 duration-300 py-4 sm:py-0 font-inter">
      <div className="flex flex-col sm:flex-row sm:items-center w-full gap-y-1">
        <div className="flex-1 px-0 smpx-2 md:px-6 lg:px-10 sm:py-4 md:py-6">
          <span className="text-text-900 text-sm sm:text-base font-semibold">
            {item?.title}
          </span>
        </div>
        <div className="flex-1 px-0 smpx-2 md:px-6 lg:px-10 sm:py-4 md:py-6">
          <span className="text-text-700 text-sm sm:text-base">
            {item?.location}
          </span>
        </div>
        <div className="flex-1 px-0 smpx-2 md:px-6 lg:px-10 sm:py-4 md:py-6">
          <span className="text-text-700 text-sm sm:text-base">
            {item?.experience}
          </span>
        </div>
      </div>
      <div className="flex-1 px-0 smpx-2 md:px-6 lg:px-10 sm:py-4 md:py-6">
        <Link
          href={`/career/${item?._id}`}
          className="btn bg-main-400 hover:bg-main-500 text-white px-6 py-3"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default JobPostItem;
