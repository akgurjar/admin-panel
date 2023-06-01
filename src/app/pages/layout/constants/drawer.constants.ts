import {
  DASHBOARD_ROUTE,
  ADMINS_ROUTE,
  REPORTS_ROUTE,
  CONTENT_ROUTE,
  FACILITIES_ROUTE,
  ORGANIZATIONS_ROUTE,
} from './route.constants';

export const DRAWER_MENUS: DrawerMenu[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    link: DASHBOARD_ROUTE.url,
    exact: true,
  },
  {
    label: 'Sub Admins',
    icon: 'group',
    link: ADMINS_ROUTE.url,
    exact: false,
    children: [
      {
        label: 'Permissions',
        icon: 'security',
        link: ADMINS_ROUTE.url,
        exact: false,
      },
      {
        label: 'Admin Roles',
        icon: 'shield_person',
        link: ADMINS_ROUTE.url,
        exact: false,
      },
      {
        label: 'Accounts',
        icon: 'shield_person',
        link: ADMINS_ROUTE.url,
        exact: false,
      },
    ],
  },
  {
    label: 'Organizations',
    icon: 'location_city',
    link: ORGANIZATIONS_ROUTE.url,
    exact: false,
  },
  {
    label: 'Facilities',
    icon: 'where_to_vote',
    link: FACILITIES_ROUTE.url,
    exact: false,
    children: [
      {
        label: 'Parameters',
        icon: 'where_to_vote',
        link: REPORTS_ROUTE.url,
        exact: false,
      },
    ],
  },
  // {
  //   label: 'Organization Management',
  //   icon: 'group',
  //   link: USERS_ROUTE.url,
  //   exact: false,
  // },
  {
    label: 'Data Reports',
    icon: 'monitoring',
    link: REPORTS_ROUTE.url,
    exact: false,
  },
  {
    label: 'Manage Content',
    icon: 'text_snippet',
    link: CONTENT_ROUTE.url,
    exact: false,
  },
];
