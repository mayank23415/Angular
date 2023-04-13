import { Component } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSubjects';
  data: String;

  constructor(private subject: SubjectService) {
    
  }

  sendData() {
    this.subject.mySubject.next(this.data);
  }
}
