import { createAction } from "@ngrx/store";
import { Data } from "src/app/model/data.model";
import { Question } from "src/app/model/question.model";

console.log('Action');

export const loadData = createAction('[Data] Load Data');
export const loadDataSuccess = createAction('[Data] Load  Data Success', (data: Data[])=>({data}));

export const loadQuestionData = createAction('[Question] Load Question Data', (id: number)=>({id}));
export const loadQuestionDataSuccess = createAction('[Question] Load Question Data Success', (data: Question[])=>({data}));
