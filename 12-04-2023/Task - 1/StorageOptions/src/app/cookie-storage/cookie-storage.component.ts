import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-storage',
  templateUrl: './cookie-storage.component.html',
  styleUrls: ['./cookie-storage.component.css']
})
export class CookieStorageComponent {
  constructor(private cookieService: CookieService) {

  }

  firstName;
  lastName; 
  email;
  storeData() {
    const obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }

    this.cookieService.set('info', JSON.stringify(obj));
  }

  clearData() {
    this.cookieService.deleteAll();
  }
}
