import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/course" }),

  endpoints: (builder: any) => ({

    getCourses: builder.query({
      query: () => ({
        url: '/',
        method: "GET",
      }),
    }),

    createCourse: builder.mutation({
      query: (data: any) => ({
        url: `/`,
        method: "POST",
        body: data,
      }),
    }),

    updateCourse: builder.mutation({
      query: (data: any) => ({
        url: `/${data.id}`,
        method: 'PUT',
        body: data
      }),
    }),

    deleteCourse: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
    }),
  }),
});

export const { useCreateCourseMutation, useGetCoursesQuery, useDeleteCourseMutation, useUpdateCourseMutation } = courseApi;
