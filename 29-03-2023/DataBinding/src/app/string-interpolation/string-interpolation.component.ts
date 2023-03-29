import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  info : String = "We can use properties and methods of corresponding component";
  flag : boolean = true;
  displayData() {
    this.flag = false;
    return this.flag;
  }
}
