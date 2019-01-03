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
            title: 'DOB',
            id: 'dob',
            templateBy: 'dob',
            sorting: true
        },
        {
            title: 'Email',
            id: 'email',
            resolve: (row: any) => row['email']
        },
        {
            title: 'Created On',
            id: 'createdOn',
            templateBy: 'createdOn',
            sorting: true
        },
        {
            title: 'Updated On',
            id: 'updatedOn',
            templateBy: 'updatedOn',
            sorting: true
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
        sorting: true,
        search: 'Search User',
        filterComponent: UserFilterComponent,
    };
    data: Table.Data<any>;
    constructor(rows: any[], optionData = {pageIndex: 0, pageSize: 10, length: 0}) {
        this.data = {
            ...optionData,
            rows
        };
    }
}
