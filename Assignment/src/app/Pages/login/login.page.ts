import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HomePageModule } from '../home/home.module';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  constructor(private userservice: UserService, private router: Router, private route: ActivatedRoute) {}

  username:string;
  password:string;

  loginAttempts:number = 0;

   login()
   {
    this.loginAttempts++;
    this.userservice.setLoginInput(this.username, this.password)
    if(this.userservice.verify()){
      this.router.navigate(['home'])
    }
    return this.loginAttempts
   }

}
