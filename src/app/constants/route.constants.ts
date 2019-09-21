

export const PUBLIC_ROUTE = {
    path: 'public',
    get url(): string {
        return `/${this.path}`;
    }
};

export const LAYOUT_ROUTE = {
    path: 'layout',
    get url(): string {
        return `/${this.path}`;
    }
};
