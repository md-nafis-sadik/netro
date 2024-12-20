import { apiSlice } from "../api/apiSlice";
import { setPosts } from "./slice";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts?limit=10",
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          dispatch(setPosts(response.data?.posts));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
