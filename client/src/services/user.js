import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `api/reg`,
        method: 'POST',
        body: data,
      }),
    }),

    getUser: builder.mutation({
      query: (data) => ({
        url: `api/auth`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetUserMutation } = userApi;
