import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface users {
  id: String;
  name: String;
  email: String;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: users[];
  constructor() {
    this.users = [
      { id: '1', name: 'Mayank', email: 'mayank@gmail.com' },
      { id: '2', name: 'Vasu', email: 'Vasu@gmail.com' },
      { id: '3', name: 'Harshal', email: 'Harshal@gmail.com' },
      { id: '4', name: 'Sam', email: 'Sam@gmail.com' },
      { id: '5', name: 'James', email: 'James@gmail.com' },
      { id: '6', name: 'Aditya', email: 'Aditya@gmail.com' },
      { id: '7', name: 'Max', email: 'Max@gmail.com' },
      { id: '8', name: 'Daksh', email: 'Daksh@gmail.com' }
    ]
  }

  myObservable = new Observable((observer) => {
    for (let i = 0; i < this.users.length; i++) {
      observer.next(this.users[i]);
    }
  })
}


