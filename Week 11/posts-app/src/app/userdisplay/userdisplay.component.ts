import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']

})
export class UserdisplayComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
  }

  userReload() {
    this.usersService.users = [];
    this.usersService.getUsers()
  }
}
