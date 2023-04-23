import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './model/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service: DataService) {
    
  }
  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
      localStorage.setItem('data',JSON.stringify(res as Data));
    })
  }
  // setData() {
  //   this.service.getData().subscribe((res)=>{
  //     localStorage.setItem('data',JSON.stringify(res as Data[]))
  //   })
  // }
}
