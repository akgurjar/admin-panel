import { UserFilterComponent } from './user-filter/user-filter.component';

export class UserTableSource implements Table.Source<any> {
    label =  'User\'s List';
    columns: Table.Column<any>[] = [
        {
            title: 'Name',
            id: 'name',
            resolve: (row: any) => row['name']
        },
        {
            title: 'Email',
            id: 'email',
            resolve: (row: any) => row['email']
        },
        {
            title: 'Actions',
            id: 'actions',
            templateBy: 'actions'
        }
    ];
    options: Table.Options = {
        selection: true,
        index: true,
        search: 'Search User',
        filterComponent: UserFilterComponent
    };
    data: Table.Data<any>;
    constructor(rows: any[], optionData = {pageIndex: 0, pageSize: 10, length: 0}) {
        this.data = {
            ...optionData,
            rows
        };
    }
}
