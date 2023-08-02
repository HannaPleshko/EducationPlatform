import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/user' }),

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/registrate`,
        method: 'POST',
        body: data,
      }),
    }),

    getUser: builder.mutation({
      query: (data) => ({
        url: `/authenticate`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetUserMutation } = userApi;
