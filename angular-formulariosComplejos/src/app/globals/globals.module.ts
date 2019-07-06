import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, NavbarComponent, NotfoundComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, HomeComponent, NavbarComponent, NotfoundComponent, FooterComponent]
})
export class GlobalsModule { }
