import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private route: ActivatedRoute) {}

  Username = "";
  Password = "";

  loginAttempts:number = 0;

   login()
   {
    this.loginAttempts++;
    this.router.navigateByUrl('/account/' + this.Username + "/" + this.Password)
    return this.loginAttempts
   }
   
}
