import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/model/data.model';
import { Option } from 'src/app/model/option.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  //Declarations ----------------------------------->
  index: number = 0;
  dataList: Data[];
  options: Option[];
  changedCost: number=0;
  finalCost: number = 0;
  previousCost: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  
  //Initialisation ----------------------->
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    const data: Data[] = JSON.parse(localStorage.getItem('data'));
    this.dataList = data.filter(obj => obj.parentId == id);
    this.options = this.dataList[this.index].options as Option[];
    console.log(this.options);
  }
  next: boolean = true;
  

  //Next Question ------------------------>
  onNext() {
    if (this.index < this.dataList.length - 1) {
      this.index = this.index + 1;
      this.options = this.dataList[this.index].options as Option[];
      this.finalCost += this.changedCost;
      this.previousCost = this.changedCost;
      this.changedCost = 0;
      console.log(this.finalCost);
    } else {
      window.alert('No More Pages Available')
    }
  }

  //Previous Question -------------------------->
  onPrev() {
    if (this.index > -1) {
      this.index = this.index - 1;
      this.options = this.dataList[this.index].options as Option[];
      if(this.changedCost != this.previousCost) {
        this.finalCost += this.changedCost - this.previousCost;
      }
    } else {
      window.alert('No More Pages Available')
    }
  }


  //Cost Calulation ------------------------------->
  onAdd(i:number) {
    this.options.forEach(obj => obj.selected = false);
    this.options[i].selected = true;
    
    this.changedCost = this.options[i].cost;
  }
}
