import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { Form01Component } from './form01/form01.component';

@NgModule({
  declarations: [Form01Component],
  imports: [
    CommonModule,
    FormsModule,
    MyFormsRoutingModule
  ],
  exports: [Form01Component]
})
export class MyFormsModule { }
