function UserSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {Array(8)
        .fill(0)
        .map((_, idx) => (
          <div
            className="w-full block border border-neutral-300 rounded-lg overflow-hidden bg-white cursor-pointer"
            key={idx}
          >
            <div className="h-44 relative bg-neutral-300 animate-pulse"></div>
            <div className="p-4 border-t border-neutral-300">
              <div className="w-full h-6 rounded bg-neutral-300 animate-pulse mb-2"></div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-4 rounded bg-neutral-300 animate-pulse"></div>
                <div className="w-full h-4 rounded bg-neutral-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserSkeleton;
