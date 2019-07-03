import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/amf-classes/user';

@Component({
  selector: 'amf-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {
  public user:User=new User();
  public placeholders={
    usernameField:'Teclea tu nombre de usuario',
    passwordField:'Teclea tu contraseña'
  }
  constructor() {}

  createUser(myForm){
    this.user.setUsername(myForm[0].value);
    this.user.setPassword(myForm[1].value);
  }

  ngOnInit() {
  }

}
