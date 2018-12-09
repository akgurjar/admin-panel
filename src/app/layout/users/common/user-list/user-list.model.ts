import { UserFilterComponent } from './user-filter/user-filter.component';


export const LIST_CONFIG: Listing.Config = {
    label: 'User List',
    options: {
        search: true,
        filter: UserFilterComponent
    }
};

export class UserTableSource implements Table.Source<any> {
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
        selection: true
    };
    constructor(public data: any[]) {}
}
