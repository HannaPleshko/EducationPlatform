import { AdminNavigationContent, RoleContent, Role } from '@interface';

export const UserRoles = [
  { value: Role.STUDENT, label: RoleContent.STUDENT },
  { value: Role.TEACHER, label: RoleContent.TEACHER },
  { value: Role.ADMIN, label: RoleContent.ADMIN },
];

export const AdminNavigation = [AdminNavigationContent.USERS, AdminNavigationContent.COURSES, AdminNavigationContent.LESSONS];
