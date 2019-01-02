

declare interface ListingResult<T> {
    length: number;
    pageSize: number;
    pageIndex: number;
    data: T[];
}

declare namespace Api {
    export interface Response<Result> {
        errorCode?: number;
        message: string;
        result: Result;
    }
}
