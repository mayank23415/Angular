import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './model/data.model';
import { filter, map } from 'rxjs';

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
    this.service.getData().pipe(map((data)=>{
      return data['filter'](obj=>obj.parentId == null)
    })).subscribe((res)=>{
      console.log(res);
    })
  }
  // setData() {
  //   this.service.getData().subscribe((res)=>{
  //     localStorage.setItem('data',JSON.stringify(res as Data[]))
  //   })
  // }
}
