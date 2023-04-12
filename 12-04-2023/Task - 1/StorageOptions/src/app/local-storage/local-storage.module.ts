import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageRoutingModule } from './local-storage-routing.module';
import { LocalStorageComponent } from './local-storage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocalStorageComponent
  ],
  imports: [
    CommonModule,
    LocalStorageRoutingModule,
    FormsModule
  ]
})
export class LocalStorageModule { }
