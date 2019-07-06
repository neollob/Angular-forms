import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  public user: User;
  @Input() errorDetected = false;
  @Input() recordSaved = false;
  @Input() modifyUser: User;

  @Output() enviarUsuario = new EventEmitter<User>();

  constructor() {
    this.modifyUser = new User('', '');
    // this.dni = this.modifyUser.dni;
    // this.nombre = this.modifyUser.nombre;
    this.errorDetected = false;
    this.recordSaved = false;
  }
  saveRecord() {
    this.user = new User(this.modifyUser.dni, this.modifyUser.nombre);
    this.enviarUsuario.emit(this.user);
    this.modifyUser.dni = '';
    this.modifyUser.nombre = '';
  }
  newRecord() {
    this.modifyUser = new User('', '');
  }
  clearNotice() {
    this.errorDetected = false;
    this.recordSaved = false;
  }

  ngOnInit() { }

}
