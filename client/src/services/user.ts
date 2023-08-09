import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),

  endpoints: (builder: any) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    }),

    getUserById: builder.query({
      query: (id: string) => ({
        url: `/user/${id}`,
      }),
    }),

    createUser: builder.mutation({
      query: (data: any) => ({
        url: `/user/registrate`,
        method: 'POST',
        body: data,
      }),
    }),

    authenticate: builder.mutation({
      query: (data: any) => ({
        url: `/user/authenticate`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),

    updateUser: builder.mutation({
      query: (data: any) => ({
        url: `/user/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useCreateUserMutation, useAuthenticateMutation, useGetUsersQuery, useDeleteUserMutation, useUpdateUserMutation } = userApi;
