import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amf-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  nameReceived = '';
  passReceived = '';
  placeholders = {
    username: 'Teclea tu nombre de usuario',
    userpass: 'Teclea tu contraseña'
  };
  constructor() { }
  dataRecieved(name, pass) {
    this.nameReceived = name.value;
    this.passReceived = pass.value;
    if ((this.nameReceived !== '') && (this.passReceived !== '')) {
      localStorage.setItem('logged', 'true');
    } else { localStorage.setItem('logged', 'false'); }

  }
  ngOnInit() {
  }

}
