import {  createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DataState } from '../reducer/data.reducer';


export const selectData = (state: AppState) => state.data;
// const getData = createFeatureSelector<DataState>('data');
export const selectAllData = createSelector(
  selectData,
  (state: DataState) => state.data
);