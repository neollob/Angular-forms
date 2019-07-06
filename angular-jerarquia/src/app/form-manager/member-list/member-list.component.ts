import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/classes/user';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @Input() registeredUsers: number;
  @Input() usersArray: Array<User> = [];

  @Output() eraseUser = new EventEmitter<User>();
  @Output() modifyUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  deleteUser(deletedUser: User) {
    this.eraseUser.emit(deletedUser);
  }
  editUser(editedUser: User) {
    this.modifyUser.emit(editedUser);
  }
}
