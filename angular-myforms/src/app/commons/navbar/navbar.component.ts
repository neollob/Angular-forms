import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logged = localStorage.getItem('logged');
  constructor() { }

  ngOnInit() {
  }

}
