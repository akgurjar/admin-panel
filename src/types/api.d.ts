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
  export type List<T> = Response<ListResult<T>>;
  export type Login = Response<{
    accessToken: string;
    refreshToken: string;
  }>;
}
