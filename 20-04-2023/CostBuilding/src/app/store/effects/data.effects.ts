import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/service/data.service";
import { loadData, loadDataSuccess } from "../actions/data.action";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { Data } from "src/app/model/data.model";

@Injectable()
export class DataEffects{
    constructor(private service: DataService, private action$: Actions) {

    }

    loadData = createEffect(()=>this.action$.pipe(
        ofType(loadData),
        exhaustMap(()=> this.service.getData().pipe(
            map((data:Data[])=>loadDataSuccess({data:data})),
            catchError(()=>EMPTY)
        )))
    );
}