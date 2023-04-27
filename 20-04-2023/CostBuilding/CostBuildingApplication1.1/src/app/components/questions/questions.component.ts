import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Option } from 'src/app/model/option.model';
import { Question } from 'src/app/model/question.model';
import { loadQuestionData, loadQuestionDataSuccess } from 'src/app/store/actions/data.action';
import { DataState } from 'src/app/store/reducer/data.reducer';
import { selectData } from 'src/app/store/selector/data.selector';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  data: Question[];
  options: Option[];
  index: number = 0;
  changedCost: number = 0;
  finalCost: number = 0;
  question$ = this.store.pipe(select(selectData));

  constructor(private store: Store, private route: ActivatedRoute) {

  }



  //Initialisation ----------------------->
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.store.dispatch(loadQuestionData(id));
    this.question$.subscribe(data => {
      this.data = data;
      //console.log(data);
      this.options = this.data[this.index]?.options;
      //console.log(this.options)
    })
  }
  onAdd(i: number) {
    this.options.forEach(obj => obj.selected = false);
    this.options[i].selected = true;

    this.changedCost = this.options[i].cost;
  }
  onNext() {
    if (this.index < this.data.length - 1) {
      this.index++;
      this.options = this.data[this.index]?.options;
    }

  }

  onPrev() {
    if (this.index > 0) {
      this.index--;
      this.options = this.data[this.index].options;
    }

  }
}
