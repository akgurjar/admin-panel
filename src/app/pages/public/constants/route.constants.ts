import { PUBLIC_ROUTE } from '@constants/route.constants';

export const LOGIN_ROUTE = {
  path: 'login',
  get url(): string {
    return `${PUBLIC_ROUTE.url}/${this.path}`;
  },
};

export const MFA_SETUP_ROUTE = {
  path: 'setup',
  get url(): string {
    return `${LOGIN_ROUTE.url}/${this.path}`;
  },
};

export const MFA_VERIFY_ROUTE = {
  path: 'verify',
  get url(): string {
    return `${LOGIN_ROUTE.url}/${this.path}`;
  },
};

export const FORGOT_ROUTE = {
  path: 'forgot',
  get url(): string {
    return `${PUBLIC_ROUTE.url}/${this.path}`;
  },
};

export const RESET_ROUTE = {
  path: 'reset',
  get url(): string {
    return `${PUBLIC_ROUTE.url}/${this.path}`;
  },
};
