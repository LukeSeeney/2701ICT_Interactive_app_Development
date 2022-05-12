import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute, private user:UserService) {}

  username = "";
  password = "";

  loginAttempts:number = 0;

   login()
   {
    this.user.setDetails(this.username, this.password);
    this.loginAttempts++;
    this.router.navigateByUrl('/account/' + this.username + "/" + this.password)
   }
 
  ngOnInit(){
  
  }
}
