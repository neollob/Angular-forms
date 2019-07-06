import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberManagerComponent } from './member-manager/member-manager.component';
import { MyFormsModule } from '../my-forms/my-forms.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MemberListComponent, MemberManagerComponent],
  imports: [
    CommonModule, MyFormsModule, RouterModule
  ],
  exports: [MemberListComponent, MemberManagerComponent]
})
export class FormManagerModule { }
