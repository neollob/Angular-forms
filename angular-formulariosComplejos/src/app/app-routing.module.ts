import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './globals/home/home.component';
import { NotfoundComponent } from './globals/notfound/notfound.component';
import { MyFormsModule } from './my-forms/my-forms.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forms', loadChildren: () => import('./my-forms/my-forms.module').then(mod => mod.MyFormsModule) },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
