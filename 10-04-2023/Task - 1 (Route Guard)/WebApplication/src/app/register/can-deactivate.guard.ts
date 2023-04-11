import { Injectable } from '@angular/core';
import { RegisterComponent } from './register.component';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard {
  obj = new RegisterComponent();
  canDeactivate() {
    return this.obj.canExit();
  }
}
