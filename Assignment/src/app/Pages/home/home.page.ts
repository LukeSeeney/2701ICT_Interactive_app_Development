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

  username = "";
  password = "";

  ngOnInit()
   {
     this.username = this.userservice.getUsername();
     this.password = this.userservice.getPassword()
   }

  navtolights(){
    this.router.navigate(["lightdisplay"])
  }
  navtoscheduling(){
    this.router.navigate(["scheduling"])
  }
}
