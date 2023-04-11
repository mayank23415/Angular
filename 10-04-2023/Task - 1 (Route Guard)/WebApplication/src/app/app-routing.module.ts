import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardGuard } from './route-guard.guard';


import { CanDeactivateGuard } from './register/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'register',
    canActivate:[RouteGuardGuard],
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path: 'products',
    canActivate:[RouteGuardGuard],
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    canActivate:[RouteGuardGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
