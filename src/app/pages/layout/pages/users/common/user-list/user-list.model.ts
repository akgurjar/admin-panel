import { UserFilterComponent } from './user-filter/user-filter.component';

export class UserTableSource implements Table.Source<any> {
    label =  'User\'s List';
    columns: Table.Column<any>[] = [
        {
            title: 'Display Name',
            id: 'displayName',
            resolve: (row: any) => row['displayName']
        },
        // {
        //     title: 'Age',
        //     id: 'age',
        //     sorting: true,
        //     resolve: (row) => `${row['age']} Years`
        // },
        {
            title: 'Email',
            id: 'email',
            resolve: (row: any) => row['email']
        },
        {
            title: 'Created At',
            id: 'createdAt',
            templateBy: 'createdAt',
            sorting: true
        },
        {
            title: 'Updated At',
            id: 'updatedAt',
            templateBy: 'updatedAt',
            sorting: true
        },
        {
            title: 'Actions',
            id: 'actions',
            centered: true,
            templateBy: 'actions'
        }
    ];
    options: Table.Options = {
        selection: true,
        index: true,
        sorting: true,
        search: 'Search User',
        filterComponent: UserFilterComponent,
    };
    data: Table.Data<any>;
    constructor(rows: any[], optionData = {pageIndex: 0, pageSize: 10, total: 0}) {
        this.data = {
            ...optionData,
            rows
        };
    }
}
