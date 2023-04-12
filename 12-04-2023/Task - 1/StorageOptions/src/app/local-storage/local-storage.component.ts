import { Component } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {
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
    localStorage.setItem('info', JSON.stringify(obj));
  }

  clearData( ) {
    localStorage.clear();
  }
}
 