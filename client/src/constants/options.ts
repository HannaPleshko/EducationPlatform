import { AdminNavigationContent, Role } from '@Interfaces';

export const AdminNavigation = [AdminNavigationContent.USERS, AdminNavigationContent.COURSES];

export const UserRoles = [
  { value: 1, label: Role.STUDENT },
  { value: 2, label: Role.TEACHER },
  { value: 3, label: Role.ADMIN },
];
