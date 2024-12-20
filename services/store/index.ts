import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./modules/api/apiSlice";
import authReducer from "./modules/auth/slice";
import postsReducer from "./modules/posts/slice";
import todosReducer from "./modules/todo/slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    posts: postsReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
