import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${USERS_URL}/userProfile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = usersApiSlice;
