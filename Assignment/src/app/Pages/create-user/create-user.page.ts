import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor(private userservice: UserService) { }

  // username and password inputs
  username:string;
  password:string;

  ngOnInit() {
  }

  register(){

  }
}
