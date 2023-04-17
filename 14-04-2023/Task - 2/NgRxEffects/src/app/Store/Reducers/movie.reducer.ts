import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/Model/movie";
import { addMovies, getMovies } from "../Actions/movie.action";

export interface MovieState{
    movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie>=[];

export const movieReducer = createReducer(
    initialState,
    on(getMovies, (state)=>[...mockMovies()]),
    on(addMovies, (state, movie)=> [...state, movie])
);

function mockMovies(): Movie[] {
    const movie1 = new Movie(
        'Avenger End Game',
        123,
        new Date('24 Apr, 2019')
    )
    movie1.id = 1;
    const movie2 = new Movie(
        'Avenger End Game',
        123,
        new Date('24 Apr, 2019')
    )
    movie1.id = 2;
    const movie3 = new Movie(
        'Avenger End Game',
        123,
        new Date('24 Apr, 2019')
    )
    movie1.id = 3;

    const movies = [movie1,movie2,movie3];
    return movies;
}