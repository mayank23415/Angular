import { createReducer, on } from "@ngrx/store";
import { Data } from "src/app/model/data.model";
import { loadDataSuccess } from "../actions/data.action";

export const featureKey = 'data'
export interface DataState{
    data: Data[],
}

const initialState: Data[]=[];

export const dataReducer = createReducer(
    initialState,
    on(loadDataSuccess, (state,data)=>[
        ...data.data
    ])
)