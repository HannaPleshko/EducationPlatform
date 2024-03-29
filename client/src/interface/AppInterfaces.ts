export enum Role {
  STUDENT = 1,
  TEACHER = 2,
  ADMIN = 3,
}

export enum RoleContent {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
  ADMIN = 'Admin',
}

export enum AdminNavigationContent {
  USERS = 'Users',
  COURSES = 'Courses',
  LESSONS = 'Lessons',
}

export enum LandingNavigationContent {
  ABOUT = 'About',
  BESTSELLERS = 'Bestsellers',
  FAQ = 'FAQ',
}

export interface User {
  user_id?: string;
  name: string;
  surname: string;
  email: string;
  pwd: string;
  prevPwd?: string;
  role: number;
}

export interface Course {
  course_id: string;
  title: string;
  description: string;
}

export interface Lesson {
  lesson_id: string;
  course_id: string;
  title: string;
  description: string;
}

export interface GridContent {
  fields: string[];
  rows: Course[] | User[] | Lesson[];
  rowCount: number;
}
