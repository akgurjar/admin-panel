
export type ColumnResolver<T> = (row: T) => string;

export class TableSource<T> {
    get sort(): boolean {
        return this.options && !!this.options.sort;
    }
    get actions(): boolean {
        return this.options && !!this.options.actions;
    }
    constructor(
        public columns: TableColumn<T>[],
        public data: T[],
        private options?: TableSourceOptions
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

export class TableAction<T> {
    constructor(
        public icon: string,
        public resolveTitle: (row: T) => string
    ) {}
}
