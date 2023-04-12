import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookieStorageRoutingModule } from './cookie-storage-routing.module';
import { CookieStorageComponent } from './cookie-storage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CookieStorageComponent
  ],
  imports: [
    CommonModule,
    CookieStorageRoutingModule,
    FormsModule
  ]
})
export class CookieStorageModule { }
