import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardGuard } from '../route-guard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private routeGaurd: RouteGuardGuard,private router: Router) {

  }

  login() {
    this.routeGaurd.logIn();
    if(this.routeGaurd.canActivate)
      this.router.navigate(['home']);
  }
}
