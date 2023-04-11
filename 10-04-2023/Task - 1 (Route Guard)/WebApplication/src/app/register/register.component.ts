import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reactiveForm: FormGroup;
  firstName;
  lastName;
  email;
  password;
  country;
  gender;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, this.checkSpace]),
      lastName: new FormControl(null, [Validators.required, this.checkSpace]),
      email: new FormControl(null, [Validators.required, Validators.email, this.checkSpace]),
      gender: new FormControl(null, Validators.required),
      country: new FormControl('India', Validators.required),
      password: new FormControl(null, Validators.required),
      skills: new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkill() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  removeSkill(i) {
    (<FormArray>this.reactiveForm.get('skills')).removeAt(i);
  }


  //custom validator
  checkSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { checkSpace: true };
    }
    return null;
  }

  canExit() {
    if(!this.firstName || !this.lastName || !this.password || !this.email || !this.gender || !this.country) {
      return confirm('Do you want to leave the page?');
    }else {
      return true;
    }
  }
}
