import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: () => ({
        url: "/admins/all",
      }),
    }),
  }),
});

export const { useUserProfileQuery } = authApi;
