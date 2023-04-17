import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addMovies, getMovies } from '../Store/Actions/movie.action';
import { Movie } from '../Model/movie';
import { MovieState } from '../Store/Reducers/movie.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movie[] = [];
  newMovie :Movie = new Movie();
  movies$ = this.store.select('movies');
  constructor(private store: Store<MovieState>) {
    this.getAllMovies();
  }

  getAllMovies() {
    this.store.dispatch(getMovies());
  }

  addNewMovies() {
    this.store.dispatch(addMovies(this.newMovie));
  }
}
