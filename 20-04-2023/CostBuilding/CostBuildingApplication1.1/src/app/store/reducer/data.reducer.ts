import { createReducer, on } from "@ngrx/store";
import { Data } from "src/app/model/data.model";
import { loadDataSuccess, loadQuestionDataSuccess } from "../actions/data.action";
import { Question } from "src/app/model/question.model";

export const featureKey = 'data'


export interface DataState {
    data: Data[],
}

const initialState: DataState = {
    data:[],
};



export const dataReducer = createReducer(
    initialState,
    on(loadDataSuccess, (state, { data }) => (
        {
            ...state,
            data: data,
        }
    )),
    on(loadQuestionDataSuccess,(state, {data})=>({
        ...state,
        data:data
    }))
)
