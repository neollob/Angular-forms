import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, NotfoundComponent, NavbarComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, HomeComponent, NotfoundComponent, NavbarComponent]
})
export class CommonsModule { }
