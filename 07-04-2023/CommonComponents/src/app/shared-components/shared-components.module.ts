import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import { CardViewComponent } from './components/card-view/card-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'



@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    CardViewComponent
  ]
})
export class SharedComponentsModule { }
