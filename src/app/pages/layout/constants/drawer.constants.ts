import {
  DASHBOARD_ROUTE,
  USERS_ROUTE,
  REPORTS_ROUTE,
  CONTENT_ROUTE,
} from './route.constants';

export const DRAWER_MENUS: DrawerMenu[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    link: DASHBOARD_ROUTE.url,
    exact: true,
  },
  {
    label: 'User Management',
    icon: 'group',
    link: USERS_ROUTE.url,
    exact: false,
  },
  {
    label: 'Report Management',
    icon: 'monitoring',
    link: REPORTS_ROUTE.url,
    exact: false,
  },
  {
    label: 'Content Management',
    icon: 'text_snippet',
    link: CONTENT_ROUTE.url,
    exact: false,
  },
];
