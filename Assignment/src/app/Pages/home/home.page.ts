import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LightStatusService } from '../shared/light-status.service';
import { UserService } from '../shared/user.service';
import {Chart } from 'chart.js'
import { range } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // chart
  @ViewChild('powerChart', {static:true}) canvas;
  chart:any
  // chart data
  chartDates = []

  // saved user data
  username:string;
  password:string;
  powerData = [0, 0, 0, 0, 0, 0, 0];
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

     // get the last 7 days to display on the chart
     for(let i = 0; i < 7; i++)
     {
        var d = new Date();
        d.setDate(d.getDate() - i);
        this.chartDates.push(d)
     }
     for(let i in this.chartDates){
        for(let j in this.userData){
          // console.log(this.userData[j])
          for(let k in this.userData[j].lights){
            //  console.log(this.userData[j].lights[k].dailyPower)
            for(let l in this.userData[j].lights[k].dailyPower){
              if(this.userData[j].lights[k].dailyPower[l].startDate.toDateString() === this.chartDates[i].toDateString()){
                this.powerData[i] += this.userData[j].lights[k].dailyPower[l].powerUsage;
                console.log(this.userData[j].lights[k].dailyPower[l].powerUsage)
              }
            }
          }
        }
     }
    // console.log(this.powerData)
    
    // console.log(this.lightService.areaStorage)

    // chart
    Chart.defaults.global.defaultFontColor = "#ffffff";
    this.chart = new Chart(this.canvas.nativeElement,
    {
      type: 'line',
      data:
      {
        labels: this.chartDates,
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
          xAxes:[
          {
            scaleLabel: {
              display: true,
              labelString: 'last 7 days'
            },
            display:true,
            type: "time",
            time:
            {
              parser: 'DD/MM/YYYY HH:mm',
              tooltipFormat: 'll HH:mm',
              unit: 'day',
              unitStepSize: 1,
              displayFormats: 
              {
                'day': 'DD/MM/YYYY'
              }
            }
          }],
          yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Power Used (KW/h)'
            },
            display: true,
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
