import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  Username = "";
  Password = "";

  ngOnInit()
   {
     this.Username = this.route.snapshot.paramMap.get("Username");
     this.Password = this.route.snapshot.paramMap.get("Password");
   }
}
