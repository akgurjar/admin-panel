declare namespace Api {
  export interface Response<Result> {
    errorCode?: number;
    message: string;
    result: Result;
  }
  export interface ListResult<T = unknown> {
    total: number;
    pageSize: number;
    pageIndex: number;
    data: T[];
  }
  export type List<T = unknown> = Response<ListResult<T>>;
  export type Login = Response<{
    accessToken: string;
    refreshToken: string;
  }>;
}
