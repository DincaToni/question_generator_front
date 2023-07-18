import { apiSlice } from "./apiSlice";
const QUIZZES_URL = "/api/quizzes";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addQuizz: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${QUIZZES_URL}/addQuizz`,
        method: "POST",
        body: data,
      }),
    }),
    getQuizzes: builder.query({
      query: (data) => ({
        url: ` http://localhost:5000${QUIZZES_URL}/${data}`,
        method: "GET",
      }),
      providesTags: ["Quiz"],
    }),
    getQuizById: builder.query({
      query: (data) => ({
        url: ` http://localhost:5000${QUIZZES_URL}/quiz/${data}`,
        method: "GET",
      }),
      providesTags: ["Quiz"],
    }),
    removeQuizById: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${QUIZZES_URL}/quiz/${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const {
  useAddQuizzMutation,
  useGetQuizzesQuery,
  useGetQuizByIdQuery,
  useRemoveQuizByIdMutation,
} = usersApiSlice;
