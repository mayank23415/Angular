import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface user {
  firstName : String;
  password : String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onSubmit(form : NgForm) {
    console.log(form);
  }
}
