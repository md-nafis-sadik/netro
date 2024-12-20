import { PostState } from "@/services/types/interfaces/posts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PostState = {
  posts: [],
};

const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // add reducers here
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = slice.actions;
export default slice.reducer;
