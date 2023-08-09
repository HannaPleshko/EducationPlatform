import { User, GridContent, Course } from '@Interfaces';

export interface ApiResponse<T> {
  status: number;
  data?: T;
  error?: string;
}

export interface UserApiResponse extends ApiResponse<User> {}

export interface UserGridApiResponse extends ApiResponse<GridContent> {}

export interface CourseApiResponse extends ApiResponse<Course> {}
