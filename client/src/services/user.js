import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/reg`,
        method: 'POST',
        body: data,
      }),
    }),

    getUser: builder.mutation({
      query: (data) => ({
        url: `/auth`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetUserMutation } = userApi;
