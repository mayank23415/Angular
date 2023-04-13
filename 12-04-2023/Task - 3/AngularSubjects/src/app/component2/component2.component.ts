import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  data;
  constructor(private subject:SubjectService) {
    subject.mySubject.subscribe({
      next: (val) => {
        this.data = val;
      }
    })
  }
}
