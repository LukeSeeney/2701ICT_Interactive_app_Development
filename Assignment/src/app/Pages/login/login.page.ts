import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private route: ActivatedRoute) {}

  Username = "";
  Password = "";

  loginAttempts:number = 0;

   login()
   {
    this.loginAttempts++;
    this.router.navigateByUrl('../home/home.module' + "/" + this.Username + "/" + this.Password)
    return this.loginAttempts
   }
}
