import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { DataState } from './store/reducers/data.reducer';
import { loadData } from './store/actions/data.action';
import { Data } from './model/data.model';
import { ofType } from '@ngrx/effects';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CostBuilding';
  data$ = this.store.select('data');
  constructor(private store: Store<DataState>) {

  }

  ngOnInit(): void {

  }

  async onClick() {
    this.store.dispatch(loadData());
    this.data$.subscribe()
  }

  async getData() {
    
  }
}
