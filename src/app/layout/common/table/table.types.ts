

namespace Table {
    export interface Column<T> {
        title: string;
        id: string;
        templateBy?: string;
        resolve?: (row: T) => string;
    }
    export interface Options {
        selection?: boolean;
        index?: boolean;
        search?: boolean | string;
        filterComponent?: any;
    }
    export interface Source<T> {
        columns: Column<T>[];
        label: string;
        data: T[];
        options?: Options;
    }
}

