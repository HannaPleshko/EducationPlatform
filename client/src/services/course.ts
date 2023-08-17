import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),

  endpoints: (builder: any) => ({
    getCourses: builder.query({
      query: () => ({
        url: '/course',
        method: 'GET',
      }),
    }),

    createCourse: builder.mutation({
      query: (data: any) => ({
        url: `/course`,
        method: 'POST',
        body: data,
      }),
    }),

    updateCourse: builder.mutation({
      query: (data: any) => ({
        url: `/course/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deleteCourse: builder.mutation({
      query: (id: string) => ({
        url: `/course/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useCreateCourseMutation, useGetCoursesQuery, useDeleteCourseMutation, useUpdateCourseMutation } = courseApi;
