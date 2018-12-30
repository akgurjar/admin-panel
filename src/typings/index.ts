/// <reference path="sidenav.d.ts"/>
/// <reference path="api.ts"/>


declare interface TableSourceOptions {
    sort?: boolean;
    actions?: boolean;
    selection?: boolean;
}

declare interface ListOptions {
    search?: boolean;
    filter?: any;
}

declare interface ApiResponse<Result> {
    errorCode?: number;
    message: string;
    result: Result;
}



