

declare namespace Api {
    export interface Response<Result> {
        errorCode?: number;
        message: string;
        result: Result;
    }
    export interface ListResult<T> {
        total: number;
        pageSize: number;
        pageIndex: number;
        data: T[];
    }
    export type ListResponse<T> = Response<ListResult<T>>;
}
