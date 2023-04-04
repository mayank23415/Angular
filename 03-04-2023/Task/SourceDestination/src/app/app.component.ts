import { BooleanInput } from '@angular/cdk/coercion';
import { Component } from '@angular/core';

interface source {
  value: String;
  viewValue: String;
  flag: boolean;
  blocked: String[];
}

interface destination {
  value: String;
  viewValue: String;
  flag: boolean;
  blocked: String[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  selectedSource: string = "";
  selectedDestination: string = "";
  source: source[];
  destination: destination[];
  routes: String[] =[];
  route: String = '';


  constructor() {
    this.source = [
      { value: 'delhi', viewValue: 'Delhi', flag: false, blocked: ['delhi'] },
      { value: 'mumbai', viewValue: 'Mumbai', flag: false, blocked: ['mumbai'] },
      { value: 'gujarat', viewValue: 'Gujarat', flag: false, blocked: ['gujarat'] },
      { value: 'hyderabad', viewValue: 'Hyderabad', flag: false, blocked: ['hyderabad'] },
      { value: 'banglore', viewValue: 'Banglore', flag: false, blocked: ['banglore'] }
    ];
    this.destination = [
      { value: 'delhi', viewValue: 'Delhi', flag: false, blocked: ['delhi'] },
      { value: 'mumbai', viewValue: 'Mumbai', flag: false, blocked: ['mumbai'] },
      { value: 'gujarat', viewValue: 'Gujarat', flag: false, blocked: ['gujarat'] },
      { value: 'hyderabad', viewValue: 'Hyderabad', flag: false, blocked: ['hyderabad'] },
      { value: 'banglore', viewValue: 'Banglore', flag: false, blocked: ['banglore'] }
    ]
  }


  //disableDest : Implemented to disable visited destination.
  disableDest() {
    let i = this.source.findIndex(city => city.value == this.selectedSource);
    let blocked = this.source[i].blocked;


    for (let i = 0; i < this.destination.length; i++) {
      this.destination[i].flag = false;
    }

    for (let i = 0; i < blocked.length; i++) {
      let index = -1;
      for (let j = 0; j < this.destination.length; j++) {
        if (this.destination[j].value.toLowerCase() == blocked[i]) {
          index = j;
          break;
        }
      }
      this.destination[index].flag = true;
    }

  }

  //disableSource: Implemented to disable sources
  disableSource() {
    let i = this.destination.findIndex(city => city.value == this.selectedDestination);
    let blocked = this.destination[i].blocked;


    for (let i = 0; i < this.source.length; i++) {
      this.destination[i].flag = false;
    }

    for (let i = 0; i < blocked.length; i++) {
      let index = -1;
      for (let j = 0; j < this.source.length; j++) {
        if (this.source[j].value.toLowerCase() == blocked[i]) {
          index = j;
          break;
        }
      }
      this.source[index].flag = true;
    }

  }

  submit(){
    let srcIndex = this.source.findIndex(city => city.value == this.selectedSource);
    this.source[srcIndex].blocked.push(this.selectedDestination);

    let desIndex = this.destination.findIndex(city => city.value == this.selectedDestination);
    this.destination[desIndex].blocked.push(this.selectedSource);

    for (let i = 0; i < this.source.length; i++) {
      this.destination[i].flag = false;
    }

    for (let i = 0; i < this.destination.length; i++) {
      this.source[i].flag = false;
    }

    this.route = "Source : " + this.selectedSource.toUpperCase() + " Destination : " + this.selectedDestination.toUpperCase();
    this.routes.push(this.route);

    this.selectedDestination = "";
    this.selectedSource = "";
    console.log(this.source);
    console.log(this.destination);
  }

}
