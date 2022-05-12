import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page';
import { observable } from 'rxjs';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public tab2:Tab2Page) {}

  Username = "";
  Password = "";
  loginDetails:any;

  ionViewDidLoad()
   {
    this.loginDetails = this.tab2.loginObservable.subscribe((data:any) => 
    console.log(data)
    // this.Username = data.username,
    // this.Password = data.password
   )};

  ngOnInit(){

  }
}
