import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  data;
  constructor(private subject:SubjectService) {
    subject.mySubject.subscribe({
      next: (val) => {
        this.data = val;
      }
    })
  }
}
