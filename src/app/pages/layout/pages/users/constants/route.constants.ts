import { USERS_ROUTE } from '../../../constants/route.constants';

export const USERS_LISTING_ROUTE = {
    path: '',
    get url(): string {
        return `${USERS_ROUTE.url}/${this.path}`;
    }
};

export const CREATE_USERS_ROUTE = {
    path: 'create',
    get url(): string {
        return `${USERS_ROUTE.url}/${this.path}`;
    }
};

export const USER_ROUTE = {
    path: ':user',
    param: 'user',
    url(id: string): string {
        return `${USERS_ROUTE.url}/${id}`;
    }
};
