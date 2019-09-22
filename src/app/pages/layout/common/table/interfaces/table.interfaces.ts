

export interface Column<T> {
    title: string;
    id: string;
    sorting?: boolean;
    centered?: boolean;
    templateBy?: string;
    resolve?: (row: T) => string;
}
export interface Options {
    selection?: boolean;
    index?: boolean;
    search?: boolean | string;
    sorting?: boolean;
    filterComponent?: any;
}
export interface Data<T> {
    total: number;
    pageSize: number;
    pageIndex: number;
    rows: T[];
}
export interface Source<T> {
    columns: Column<T>[];
    label: string;
    data: Data<T>;
    options?: Options;
}
export type OptionType = 'SEARCH' | 'FILTER' | 'PAGINATION';
export interface OptionData {
    pageIndex: number;
    pageSize: number;
    searchText: string;
    filterData: any;
}
export interface OptionEvent {
    type: OptionType;
    data: OptionData;
}
export type SearchHintType = 'DEFAULT' | 'SEARCHED' | 'INVALID';
