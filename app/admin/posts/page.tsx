"use client";
import PostsHelper from "@/components/responseHelpers/PostsHelper";
import { RootState } from "@/services";
import { isFetchBaseQueryError } from "@/services/store/modules/api/apiSlice";
import { useGetPostsQuery } from "@/services/store/modules/posts/api";
import { useSelector } from "react-redux";

function Posts() {
  const { posts } = useSelector((state: RootState) => state.posts);
  const { isFetching, isError, error } = useGetPostsQuery(undefined);
  const status = isFetchBaseQueryError(error) ? error?.status : null;

  return (
    <section className="py-14">
      <div className="containerX">
        <div className="mb-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            dignissimos, beatae, sequi dolores dolore tempora perferendis sunt
            error fugiat odio accusamus totam. Iusto tempore perspiciatis
            repudiandae! Animi ad omnis nihil.
          </p>
        </div>

        <div>
          <PostsHelper
            isLoading={isFetching}
            isError={isError}
            length={posts.length}
            status={status}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {posts.map((post: any, idx: number) => (
                <div
                  key={idx}
                  className="p-6 border border-neutral-300 rounded-xl"
                >
                  <h2 className="text-base font-medium text-neutral-900 mb-2">
                    {post?.title}
                  </h2>
                  <p className="text-sm text-neutral-600 line-clamp-4">
                    {post?.body}
                  </p>
                </div>
              ))}
            </div>
          </PostsHelper>
        </div>
      </div>
    </section>
  );
}

export default Posts;
