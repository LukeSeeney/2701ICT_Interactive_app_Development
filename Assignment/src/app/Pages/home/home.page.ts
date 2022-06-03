import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LightStatusService } from '../shared/light-status.service';
import { UserService } from '../shared/user.service';
import {Chart } from 'chart.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // chart
  @ViewChild('powerChart', {static:true}) canvas;
  chart:any

  // saved user data
  username:string;
  password:string;
  powerData:any;
  userData:any;

  constructor(private userservice: UserService, private lightService: LightStatusService,
              private router: Router, private route: ActivatedRoute) {}
  
  // import username and password from user service
  ngOnInit()
   {
    this.username = this.userservice.getUsername();
    this.password = this.userservice.getPassword();
    this.userData = this.userservice.getUserData();
    this.powerData = this.userservice.getPowerData();
    // console.log(this.powerData)
    this.lightService.areaStorage = this.userData;
    // console.log(this.lightService.areaStorage)

    // chart details
    this.chart = new Chart(this.canvas.nativeElement,
    {
      type: 'bar',
      data:
      {
        labels:[1,2,3,4,5,6,7,8],
        datasets: [
        {
          data: this.powerData,
          backgroundColor: "rgba(45, 211, 111, 1)",
          color: "#2dd36f",
          label: 'Power Consumption',
          barThickness: 6,
          maxBarThickness: 6
        }]
      },
      options:
      {
        scales:
        {
          yAxes: [
          {
            ticks:
            {
              beginAtZero: true
            }
          }]
        }
      }
    });
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
