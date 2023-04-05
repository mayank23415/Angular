import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveFormExample';
  reactiveForm : FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(null),
      lastName : new FormControl(null),
      password : new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
