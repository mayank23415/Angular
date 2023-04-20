import { createAction, props } from "@ngrx/store";
import { Data } from "src/app/model/data.model";

export const loadData = createAction('[Data] Load Data');
export const loadDataSuccess = createAction('[Data] Load Data Success', props<{data:Data[]}>());
