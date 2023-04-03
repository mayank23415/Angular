import { Component } from '@angular/core';

interface source {
  value : String;
  viewValue : String;
}

interface destination {
  value : String;
  viewValue : String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  selectedValue: string = "Cities";
  source : source[];
  destination : destination[];
  constructor() {
    this.source = [
      {value : 'delhi', viewValue : 'Delhi'},
      {value : 'mumbai', viewValue : 'Mumbai'},
      {value : 'gujrat', viewValue : 'Gujrat'},
      {value : 'hyderabad', viewValue : 'Hyderabad'},
      {value : 'banglore', viewValue : 'Banglore'}
    ];
    this.destination = [
      {value : 'delhi', viewValue : 'Delhi'},
      {value : 'mumbai', viewValue : 'Mumbai'},
      {value : 'gujrat', viewValue : 'Gujrat'},
      {value : 'hyderabad', viewValue : 'Hyderabad'},
      {value : 'banglore', viewValue : 'Banglore'}
    ]
  }
}
