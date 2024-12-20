import PostSkeleton from "../posts/PostSkeleton";

function PostsHelper({
  isLoading = false,
  isError = false,
  length = 0,
  status = 404,
  children,
}: {
  isLoading?: boolean;
  isError?: boolean;
  length?: number;
  status?: number | string | null;
  children: Readonly<React.ReactNode>;
}) {
  if (isLoading) return <PostSkeleton />;
  if (isError && status !== 404) return <p>Error</p>;
  if (length === 0)
    return (
      <div>
        <p>No Data found</p>
      </div>
    );
  return children;
}

export default PostsHelper;
