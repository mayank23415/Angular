import { Component, OnInit } from '@angular/core';
import { DataState } from './store/reducer/data.reducer';
import { Store } from '@ngrx/store';
import { loadData } from './store/actions/data.action';
import { map } from 'rxjs';
import { Data } from './model/data.model';
import { selectAllData } from './store/selector/data.selector';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CostBuildingApplication1.1';
  data$ = this.store.select(selectAllData);
  constructor(private store: Store){
    
  }
  dataList: Data[];
  ngOnInit(): void {
    this.store.dispatch(loadData());
    console.log(this.data$);
  }
}
