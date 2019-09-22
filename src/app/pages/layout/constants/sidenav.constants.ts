
import { USERS_ROUTE, REPORTS_ROUTE, CONTENTS_ROUTE } from './route.constants';


export const SIDE_MENUS: SideNav[] = [
    {
        label: 'Dashboard',
        icon: 'dashboard',
        link: '',
        exact: true
    },
    {
        label: 'Users',
        icon: 'group',
        link: USERS_ROUTE.url
    },
    {
        label: 'Reports',
        icon: 'insert_chart',
        link: REPORTS_ROUTE.url
    },
    {
        label: 'Manage Content',
        icon: 'ballot',
        link: CONTENTS_ROUTE.url
    }
];

