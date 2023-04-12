import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionStorageComponent } from './session-storage.component';

const routes: Routes = [{ path: '', component: SessionStorageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionStorageRoutingModule { }
