interface iRole {
  id?: number;
  role?: string ;
}

interface iCourse {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

interface iUser {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  pwd?: string;
  role?: number;
}

export { iCourse, iUser, iRole };
