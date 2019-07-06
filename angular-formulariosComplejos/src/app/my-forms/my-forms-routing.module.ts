import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01Component } from './form01/form01.component';

const routes: Routes = [
  { path: 'f01', component: Form01Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRoutingModule { }
