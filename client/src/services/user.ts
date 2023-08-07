import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/user" }),

  endpoints: (builder: any) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),

    getUserById: builder.query({
      query: (id: string) => ({
        url: `/${id}`,
      }),
    }),

    createUser: builder.mutation({
      query: (data: any) => ({
        url: `/registrate`,
        method: "POST",
        body: data,
      }),
    }),

    authenticate: builder.mutation({
      query: (data: any) => ({
        url: `/authenticate`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    updateUser: builder.mutation({
      query: (data: any) => ({
        url: `/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useAuthenticateMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
