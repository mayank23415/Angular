import { createReducer, on } from "@ngrx/store";
import { Data } from "src/app/model/data.model";
import { loadDataSuccess } from "../actions/data.action";

export interface DataState {
    data: Data[];
}

export const initialState: DataState = {
    data: []
}

export const dataReducer = createReducer(
    initialState,
    on(loadDataSuccess, (state, { data })=>({
        ...state,
        data:data
    }))
)