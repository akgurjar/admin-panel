
export type ColumnResolver<T> = (row: T) => string;

export class TableSource<T> {
    sort = false;
    actions = false;
    constructor(
        public columns: TableColumn<T>[],
        public data: T[]
    ) {}
}

export class TableColumn<T> {
    constructor(
        public label: string,
        public name: string,
        public resolve: ColumnResolver<T>,
        public sort: boolean = false
    ) {}
}