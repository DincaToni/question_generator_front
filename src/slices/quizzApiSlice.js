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
    getQuizzes: builder.mutation({
      query: (data) => ({
        url: ` http://localhost:5000${QUIZZES_URL}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddQuizzMutation } = usersApiSlice;