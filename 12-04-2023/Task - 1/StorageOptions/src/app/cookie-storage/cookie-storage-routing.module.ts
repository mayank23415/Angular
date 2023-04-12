import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookieStorageComponent } from './cookie-storage.component';

const routes: Routes = [{ path: '', component: CookieStorageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookieStorageRoutingModule { }
