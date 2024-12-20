function PostCard({ post }: { post: any }) {
  return (
    <div className="p-6 border border-neutral-300 rounded-xl">
      <h2 className="text-base font-medium text-neutral-900 mb-2">
        {post?.title}
      </h2>
      <p className="text-sm text-neutral-600 line-clamp-4">{post?.body}</p>
    </div>
  );
}

export default PostCard;
