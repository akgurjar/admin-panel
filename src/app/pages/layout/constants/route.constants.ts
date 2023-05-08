import { LAYOUT_ROUTE } from '@constants/route.constants';

export const DASHBOARD_ROUTE = {
  path: 'dashboard',
  get url(): string {
    return `${LAYOUT_ROUTE.url}/${this.path}`;
  },
};

export const USERS_ROUTE = {
  path: 'users',
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
