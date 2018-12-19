import { UserFilterComponent } from './user-filter/user-filter.component';

export class UserTableSource implements Table.Source<any> {
    label =  'User List';
    columns: Table.Column<any>[] = [
        {
            title: 'SR NO',
            id: 'sn',
            resolve: (row: any) => row['sn']
        },
        {
            title: 'NAME',
            id: 'name',
            resolve: (row: any) => row['name']
        },
        {
            title: 'EMAIL',
            id: 'email',
            resolve: (row: any) => row['email']
        }
    ];
    options: Table.Options = {
        selection: true,
        index: true,
        search: 'Search User',
        filterComponent: UserFilterComponent
    };
    constructor(public data: any[]) {}
}
