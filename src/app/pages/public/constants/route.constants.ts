import { PUBLIC_ROUTE } from 'src/app/constants';

export const LOGIN_ROUTE = {
    path: 'login',
    get url(): string {
        return `${PUBLIC_ROUTE.url}/${this.path}`;
    }
};

export const FORGOT_ROUTE = {
    path: 'forgot',
    get url(): string {
        return `${PUBLIC_ROUTE.url}/${this.path}`;
    }
};

export const RESET_ROUTE = {
    path: 'reset',
    get url(): string {
        return `${PUBLIC_ROUTE.url}/${this.path}`;
    }
};
