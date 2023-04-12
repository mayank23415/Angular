import { Component } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export class SessionStorageComponent {
  firstName;
  lastName;
  email;
  storeData( ){
    const obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }
    console.log(obj);
    sessionStorage.setItem('info', JSON.stringify(obj));
  }

  clearData( ) {
    sessionStorage.clear();
  }
}
