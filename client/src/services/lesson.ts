import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lessonApi = createApi({
  reducerPath: 'lessonApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),

  endpoints: (builder: any) => ({
    getLessons: builder.query({
      query: () => ({
        url: '/lesson',
        method: 'GET',
      }),
    }),

    getLessonById: builder.query({
      query: (id: string) => ({
        url: `/lesson/${id}`,
        method: 'GET',
      }),
    }),

    createLesson: builder.mutation({
      query: (data: any) => ({
        url: `/lesson`,
        method: 'POST',
        body: data,
      }),
    }),

    updateLesson: builder.mutation({
      query: (data: any) => ({
        url: `/lesson/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deleteLesson: builder.mutation({
      query: (id: string) => ({
        url: `/lesson/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useCreateLessonMutation, useGetLessonsQuery, useDeleteLessonMutation, useUpdateLessonMutation, useGetLessonByIdQuery } = lessonApi;
