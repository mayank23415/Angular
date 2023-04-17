import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/Model/movie";

export const getMovies = createAction('[Movie] Get movie');
export const addMovies = createAction('[Movie] Add movie',
    props<(Movie)>());
export const getMovieSuccess = createAction('[Movie] Add movie success',
    props<(Movie)>());