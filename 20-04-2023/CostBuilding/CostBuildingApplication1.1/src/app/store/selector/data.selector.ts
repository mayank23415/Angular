import {  createFeatureSelector, createSelector } from '@ngrx/store';

import { DataState } from '../reducer/data.reducer';


//export const selectData = (state: AppState) => state.data;
const getData = createFeatureSelector<DataState>('data');
export const selectData = createSelector(
  getData,
  (state: DataState) => state.data,
);

