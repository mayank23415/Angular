import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Data } from 'src/app/model/data.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dataList: Data[];

  constructor(private router:Router) {

  }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('data'));
    
    this.dataList = data.filter(obj => obj.parentId === null);
  }

  onSelect(i:number) {
    this.dataList.forEach(obj=>obj.selected = true);
    this.dataList[i].selected = false;
    this.router.navigate([`question/${i+1}`]);
    console.log(i);
  }
}