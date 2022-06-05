import { Component, OnInit } from '@angular/core';
import { DateCheckerService } from '../shared/date-checker.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.page.html',
  styleUrls: ['./scheduling.page.scss'],
})

export class SchedulingPage implements OnInit {

   // date and time of schedule
  dateTimeToggle= new Date().toISOString();
  // scheduled event storage
  scheduledEvents = [];

  constructor(private datechecker:DateCheckerService) { 
    // push new event to storage
    for(let i in this.datechecker.scheduledEvents){
      this.scheduledEvents.push(this.datechecker.scheduledEvents[i])
    }
   }

   ngOnInit() {

  }
  
  // set time of event
  setOnTime(dateTime:string){
    // console.log(dateTime)
    this.dateTimeToggle = dateTime;
    // console.log(this.dateTimeToggle)
  }
}
