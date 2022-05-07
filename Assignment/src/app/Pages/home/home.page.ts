import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private userservice: UserService, private router: Router, private route: ActivatedRoute) {}

  username:string;
  password:string;

  ngOnInit()
   {
     this.username = this.userservice.getUsername();
     this.password = this.userservice.getPassword()
   }

  navToScheduling(){
    this.router.navigate(["scheduling"])
  }
  navToAreas(){
    this.router.navigate(["lightarea"])
  }
}
