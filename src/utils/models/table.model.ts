
export type ColumnResolver<T> = (row: T) => string;

export class TableSource<T> {
    get sort(): boolean {
        return this.options && !!this.options.sort;
    }
    constructor(
        public columns: TableColumn<T>[],
        public data: T[],
        public options?: TableSourceOptions
    ) {}
}

export class TableColumn<T> {
    constructor(
        public label: string,
        public key: string,
        public sort: boolean = false,
        public resolve?: ColumnResolver<T>,
        public templateBy?: string
    ) {}
}

export class TableAction<T> {
    constructor(
        public icon: string,
        public resolveTitle: (row: T) => string
    ) {}
}
