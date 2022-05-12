import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { observable } from 'rxjs';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

routeParamsSubscription;
id;

  constructor(private route: ActivatedRoute, private user:UserService) {}

  USER;
  username = "";
  password = "";

  ionViewDidLoad()
   {
    
   };

  ngOnInit(){
    this.routeParamsSubscription = this.route.params.subscribe((data:Params) => {
      this.USER = {
      username: this.route.snapshot.params['username'],
      password: this.route.snapshot.params['password']
      }
    })
    this.username = this.USER.username
    this.password = this.USER.password
    console.log(this.username)
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe()
  }

}
