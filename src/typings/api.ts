

// declare interface ListingResult<T> {
//     total: number;
//     page: number;
//     limit: number;
//     data: T[];
// }

declare namespace Api {
    export interface Response<Result> {
        errorCode?: number;
        message: string;
        result: Result;
    }
}
