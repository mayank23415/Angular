import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  value: string = "";
  flag : boolean = true;
  getText(event : Event) {
    this.value = (<HTMLInputElement>event.target).value;
  }

  showData() {
    this.flag = false;
  }
}
