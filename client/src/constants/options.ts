import { AdminNavigationContent, LandingNavigationContent, RoleContent, Role } from '@interface';

export const UserRoles = [
  { value: Role.STUDENT, label: RoleContent.STUDENT },
  { value: Role.TEACHER, label: RoleContent.TEACHER },
  { value: Role.ADMIN, label: RoleContent.ADMIN },
];

// Header Options
export const AdminNavigation = [
  { url: '#', label: AdminNavigationContent.USERS },
  { url: '#', label: AdminNavigationContent.COURSES },
  { url: '#', label: AdminNavigationContent.LESSONS },
];
export const LandingNavigation = [
  { url: `/#${LandingNavigationContent.ABOUT}`, label: LandingNavigationContent.ABOUT },
  { url: `/#${LandingNavigationContent.BESTSELLERS}`, label: LandingNavigationContent.BESTSELLERS },
  { url: `/#${LandingNavigationContent.FAQ}`, label: LandingNavigationContent.FAQ },
];
