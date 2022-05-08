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
  scheduledEvents = [new Event("Office", true, "2022-05-07T13:43:00+10:00"), new Event("Living room", false, "2022-05-07T13:50:00+10:00")];

  constructor(private datechecker:DateCheckerService) { 
    console.log(this.scheduledEvents)
    // push new event to storage
    for(let i in this.datechecker.scheduledEvents){
      this.scheduledEvents.push(this.datechecker.scheduledEvents[i])
    }
      console.log(this.scheduledEvents)
   }

   ngOnInit() {

  }
  
  // set time of event
  setOnTime(dateTime:string){
    console.log(dateTime)
    this.dateTimeToggle = dateTime;
    console.log(this.dateTimeToggle)
  }
}
