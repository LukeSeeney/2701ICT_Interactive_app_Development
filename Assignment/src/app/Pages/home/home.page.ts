import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LightStatusService } from '../shared/light-status.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // saved user data
  username:string;
  password:string;
  userData:any;

  constructor(private userservice: UserService, private lightService: LightStatusService,
              private router: Router, private route: ActivatedRoute) {}
  
  // import username and password from user service
  ngOnInit()
   {
    this.username = this.userservice.getUsername();
    this.password = this.userservice.getPassword();
    this.userData = this.userservice.getUserData();
    this.lightService.areaStorage = this.userData;
    // console.log(this.lightService.areaStorage)
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
