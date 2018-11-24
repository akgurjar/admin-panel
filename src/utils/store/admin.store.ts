import { ActionReducer, Action } from '@ngrx/store';


export type AdminActionType = 'INIT' | 'UPDATE';

export class AdminAction implements Action {
    constructor(public type: AdminActionType, public payload: any) {}
}

export function adminReducer(state: AdminData = null, action: AdminAction) {
    switch (action.type) {
        case 'INIT':
            return state;

        default:
            return state;
    }
}
