import { AdminNavigationContent, RoleContent, Role } from '@Interfaces';

export const AdminNavigation = [AdminNavigationContent.USERS, AdminNavigationContent.COURSES];

export const UserRoles = [
  { value: Role.STUDENT, label: RoleContent.STUDENT },
  { value: Role.TEACHER, label: RoleContent.TEACHER },
  { value: Role.ADMIN, label: RoleContent.ADMIN },
];
