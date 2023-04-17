import { createEffect,Actions, ofType } from "@ngrx/effects";
import { DataService } from "src/app/service/data.service";
import { getMovies } from "../Actions/movie.action";
import { EmptyError, catchError, exhaustMap, map } from "rxjs";

export class MovieEffects {
    
    constructor(private action$:Actions, private dataService: DataService) {

    }
    loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(async () => EmptyError)
        )
      )
    )
  );
}

function getMoviesSuccess(movies: readonly import("../../Model/movie").Movie[]): any {
    throw new Error("Function not implemented.");
}
