import { Component, OnInit } from '@angular/core';
import { DataState } from './store/reducer/data.reducer';
import { Store } from '@ngrx/store';
import { loadData, loadQuestionData } from './store/actions/data.action';
import { Data } from './model/data.model';
import { selectData } from './store/selector/data.selector';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
}
