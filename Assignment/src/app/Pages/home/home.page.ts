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

  // import username and password from user service
  ngOnInit()
   {
     this.username = this.userservice.getUsername();
     this.password = this.userservice.getPassword()
   }

  // navigate to scheduling
  navToScheduling(){
    this.router.navigate(["scheduling"])
  }
  // navigate to areas
  navToAreas(){
    this.router.navigate(["lightarea"])
  }
}
