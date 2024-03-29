export interface IRole {
  role_id?: number;
  role: string;
}

export interface IUser {
  user_id?: string;
  name: string;
  surname: string;
  email: string;
  pwd: string;
  prevPwd?: string;
  role: number;
}

export interface ICourse {
  course_id?: string;
  title: string;
  description: string;
}

export interface ILesson {
  lesson_id?: string;
  title: string;
  description: string;
  course_id: string;
}

export interface TabPreview {
  fields: string[];
  rows: ICourse[] | IUser[] | ILesson[];
  rowCount: number;
}
