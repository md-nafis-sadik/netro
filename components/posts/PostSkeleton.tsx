function PostSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, idx) => (
          <div className="p-6 border border-neutral-300 rounded-xl" key={idx}>
            <div className="h-6 bg-neutral-300 rounded animate-pulse"></div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="h-4 bg-neutral-300 rounded animate-pulse"></div>
              <div className="h-4 bg-neutral-300 rounded animate-pulse"></div>
              <div className="h-4 bg-neutral-300 rounded animate-pulse"></div>
              <div className="h-4 bg-neutral-300 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PostSkeleton;
