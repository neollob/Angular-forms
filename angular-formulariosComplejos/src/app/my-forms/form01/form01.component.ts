import { Component, OnInit } from '@angular/core';
import { FullUser } from 'src/app/shared/classes/full-user';
import languages from 'src/app/shared/data/languages';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  public user: FullUser = new FullUser();
  users: Array<FullUser> = [];
  public mensajeDeError = false;
  public errorPass = false;
  public errorLanguages = false;
  constructor() { }
  public placeholders = {
    realname: 'Teclea tu nombre y apellidos',
    username: 'Teclea tu nombre de usuario',
    userpass: 'Teclea tu contraseña',
    userconfimrpass: 'Repite tu contraseña',
    email: 'Teclea tu email'
  };
  public lang = languages;
  public userData = {
    realname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    continent: '0',
    gender: 'H',
    upTo18: false,
    languages: {}
  };
  public genders = {
    H: {
      label: 'Hombre',
      id: 'gender_H',
      value: 'H',
      name: 'genderOption',
      checked: false
    },
    M: {
      label: 'Mujer',
      id: 'gender_M',
      value: 'M',
      name: 'genderOption',
      checked: true
    }
  };
  public continents = [
    {
      value: '0',
      text: 'Selecciona continente',
      selected: true,
      disabled: true
    },
    {
      value: 'EU',
      text: 'Europa',
      selected: false,
      disabled: false
    },
    {
      value: 'AM',
      text: 'América',
      selected: false,
      disabled: false
    },
    {
      value: 'AF',
      text: 'África',
      selected: false,
      disabled: false
    },
    {
      value: 'AS',
      text: 'Asia',
      selected: false,
      disabled: false
    },
    {
      value: 'OC',
      text: 'Oceanía',
      selected: false,
      disabled: false
    }
  ];
  botonDesactivado = true;

  checkButton() {
    this.botonDesactivado = (
      this.userData.realname === '' ||
      this.userData.username === '' ||
      this.userData.password === '' ||
      this.userData.confirmPassword === '' ||
      this.userData.password !== this.userData.confirmPassword ||
      this.userData.email === '' ||
      this.userData.continent === '0' ||
      this.userData.upTo18 === false
    );
  }
  checkPassword() {
    console.log(this.userData.password);
    if (this.userData.password !== this.userData.confirmPassword) {
      this.mensajeDeError = true;
      this.errorPass = true;
    } else {
      this.mensajeDeError = false;
      this.errorPass = false;
    }
  }
  saveUser() {
    const len = JSON.parse(JSON.stringify(this.userData.languages));
    if (len.length > 2) {
      this.saveAll();
      this.errorLanguages = false;
    } else {
      this.errorLanguages = true;
    }
  }
  saveAll() {

    this.user.setRealname(this.userData.realname);
    this.user.setUsername(this.userData.username);
    this.user.setPassword(this.userData.password);
    this.user.setEmail(this.userData.email);
    this.user.setContinent(this.userData.continent);
    this.user.setGender(this.userData.gender);
    this.user.setUpTo18(this.userData.upTo18);
    this.user.setlanguages(this.userData.languages);

  }

  ngOnInit() {
  }

}
