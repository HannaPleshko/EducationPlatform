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
