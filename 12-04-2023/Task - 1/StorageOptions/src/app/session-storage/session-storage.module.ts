import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionStorageRoutingModule } from './session-storage-routing.module';
import { SessionStorageComponent } from './session-storage.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    SessionStorageComponent
  ],
  imports: [
    CommonModule,
    SessionStorageRoutingModule,
    FormsModule
  ]
})
export class SessionStorageModule { }
