import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard {
  loggedIn = false;
  
  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
  
  canActivate(){
    return this.loggedIn;
  }

}
