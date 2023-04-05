import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators, FormArray } from '@angular/forms';

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
      firstName : new FormControl(null, Validators.required),
      lastName : new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null, Validators.required),
      country: new FormControl('India', Validators.required),
      password : new FormControl(null, Validators.required),
      skills : new FormArray([
        new FormControl(null, Validators.required),
      ])
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkill() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }
}
