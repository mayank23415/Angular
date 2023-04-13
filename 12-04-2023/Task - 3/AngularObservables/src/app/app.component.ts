import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'AngularObservables';
  // myObservable = new Observable((observer) => {
  //   let time = 1000;
  //   for (let i = 0; i < 10; i++) {
  //     time = time + 1000;
  //     //observer.next(i);
  //     setTimeout(() => { observer.next(i) }, time)
  //   }
    
  // })


  // data;


  // ngOnInit(): void {
  //   this.myObservable.subscribe(
  //     (val) => {
  //       this.data = val;
  //     }
  //   )
  // }
  constructor(private users: DataService) {

  }
  data=[];
  ngOnInit(): void {
    this.users.myObservable.subscribe((val)=>{
      this.data.push(val);
    })
  }
}
