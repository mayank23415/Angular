import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  mySubject;
  constructor() { 
    this.mySubject = new BehaviorSubject<String>("Mayank");
    //this.mySubject = new Subject<String>();
  }
}
