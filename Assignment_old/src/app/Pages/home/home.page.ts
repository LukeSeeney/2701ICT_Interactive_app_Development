import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  Username = "";
  Password = "";

  ngOnInit()
   {
     this.Username = this.route.snapshot.paramMap.get("Username");
     this.Password = this.route.snapshot.paramMap.get("Password");
   }
}
