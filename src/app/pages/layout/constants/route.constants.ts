import { LAYOUT_ROUTE } from 'src/app/constants/route.constants';


export const PROFILE_ROUTE = {
    path: 'profile',
    get url(): string {
        return `${LAYOUT_ROUTE.url}/${this.path}`;
    }
};
export const DASHBOARD = {
    path: 'dashboard',
    get url(): string {
        return `${LAYOUT_ROUTE.url}/${this.path}`;
    }
};
export const USERS_ROUTE = {
    path: 'users',
    get url(): string {
        return `${LAYOUT_ROUTE.url}/${this.path}`;
    }
};

export const REPORTS_ROUTE = {
    path: 'reports',
    get url(): string {
        return `${LAYOUT_ROUTE.url}/${this.path}`;
    }
};

export const CONTENTS_ROUTE = {
    path: 'contents',
    get url(): string {
        return `${LAYOUT_ROUTE.url}/${this.path}`;
    }
};

