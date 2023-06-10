import { LAYOUT_ROUTE } from '@constants/route.constants';

export const DASHBOARD_ROUTE = {
  path: 'dashboard',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const ADMINS_ROUTE = {
  path: 'admins',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const PERMISSIONS_ROUTE = {
  path: 'permissions',
  get url(): string {
    return `${ADMINS_ROUTE.url}/${this.path}`;
  },
};

export const ACCOUNTS_ROUTE = {
  path: 'accounts',
  get url(): string {
    return `${ADMINS_ROUTE.url}/${this.path}`;
  },
};

export const ROLES_ROUTE = {
  path: 'roles',
  get url(): string {
    return `${ADMINS_ROUTE.url}/${this.path}`;
  },
};

export const ORGANIZATIONS_ROUTE = {
  path: 'organizations',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const FACILITIES_ROUTE = {
  path: 'facilities',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const REPORTS_ROUTE = {
  path: 'reports',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const CONTENT_ROUTE = {
  path: 'content',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const PROFILE_ROUTE = {
  path: 'profile',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};
