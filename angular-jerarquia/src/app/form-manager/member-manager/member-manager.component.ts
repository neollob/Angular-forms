import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-member-manager',
  templateUrl: './member-manager.component.html',
  styleUrls: ['./member-manager.component.scss']
})
export class MemberManagerComponent implements OnInit {
  public user: User;
  public storedUser: User;
  public usersArray: Array<User> = [];
  public registeredUsers = 0;
  usuarioEditado: User = new User('', '');

  usuarioCorrecto = false;
  usuarioErroneo = false;

  constructor() {

  }

  ngOnInit() {
  }


  recibir(usuario) {
    this.usuarioCorrecto = false;
    this.usuarioErroneo = false;

    if (usuario.dni === '' || usuario.nombre === '') {
      this.usuarioCorrecto = false;
      this.usuarioErroneo = true;
    }

    if (this.usersArray.length > 0) {
      for (this.storedUser of this.usersArray) {
        if (usuario.dni === this.storedUser.dni) {
          this.usuarioCorrecto = false;
          this.usuarioErroneo = true;
        }
      }
    }

    if (this.usuarioErroneo === false) {
      this.usuarioCorrecto = true;
      this.user = usuario;
      this.usersArray.push(this.user);
      this.registeredUsers = this.usersArray.length;
    }
  }
  erase(user: User) {
    const index = this.usersArray.indexOf(user);
    this.usersArray.splice(index, 1);
    this.registeredUsers = this.usersArray.length;
  }
  edit(user: User) {
    this.usuarioEditado = user;
    this.user = user;
  }

}
