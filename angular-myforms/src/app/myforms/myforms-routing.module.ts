import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';

const routes: Routes = [
  {path:'f01',component:Form01Component},
  {path:'f02',component:Form02Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyformsRoutingModule { }
