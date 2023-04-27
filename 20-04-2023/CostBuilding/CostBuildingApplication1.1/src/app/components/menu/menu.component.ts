import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Data } from 'src/app/model/data.model';
import { loadData } from 'src/app/store/actions/data.action';
import { selectData } from 'src/app/store/selector/data.selector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data: Data[];
  data$ = this.store.pipe(select(selectData));

  constructor(private store: Store, private router: Router) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadData());
    this.data$.subscribe(data=>{
      console.log(data);
    })
  }

  onClick(i: number) {
    this.router.navigate([`question/${i + 1}`]);
  }

  onSelect(i: number) {
    this.router.navigate([`question/${i + 1}`]);
    console.log(i);
  }
}
