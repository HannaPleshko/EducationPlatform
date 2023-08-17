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
}

export type AdminNavigation = (typeof AdminNavigationContent)[keyof typeof AdminNavigationContent];

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
}

export interface GridContent {
  fields: string[];
  rows: Course[] | User[];
}

export interface IAuthContext {
  token: null | string;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}
