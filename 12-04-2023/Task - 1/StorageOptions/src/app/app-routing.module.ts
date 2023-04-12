import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'localStorage', 
    loadChildren: () => import('./local-storage/local-storage.module').then(m => m.LocalStorageModule)
  },
  {
    path: 'sessionStorage', loadChildren: () => import('./session-storage/session-storage.module').then(m => m.SessionStorageModule)
  },
  { path: 'cookieStorage', loadChildren: () => import('./cookie-storage/cookie-storage.module').then(m => m.CookieStorageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
