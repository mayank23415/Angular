import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { loadData, loadDataSuccess, loadQuestionData } from "../actions/data.action";
import { Data } from "src/app/model/data.model";
import { Question } from "src/app/model/question.model";
console.log('Effects');
@Injectable()
export class DataEffects{
    constructor(private action$: Actions, private service: DataService) {

    }

    
    
    loadData = createEffect(()=> this.action$.pipe(
        ofType(loadData),
        exhaustMap(()=>this.service.getData().pipe(
            map((data:Data[])=>(loadDataSuccess(data))),
            catchError(()=>EMPTY)
        ))
    ))
    
    loadQuestionData = createEffect(()=> this.action$.pipe(
        ofType(loadQuestionData),
        exhaustMap(({id})=>this.service.getChildData(id).pipe(
            map((data)=>(loadDataSuccess(data))),
            catchError(()=>EMPTY)
        ))
    ))
}