import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Area } from 'src/app/light';
import { Event } from 'src/app/event';
import { DateCheckerService } from '../shared/date-checker.service';
import { SchedulingPage } from '../scheduling/scheduling.page';

@Component({
  selector: 'app-scheduling-modal',
  templateUrl: './scheduling-modal.page.html',
  styleUrls: ['./scheduling-modal.page.scss'],
})

export class SchedulingModalPage implements OnInit {
  // date and time of schedule
  dateTimeToggle= new Date().toISOString();
   // scheduled event storage
  scheduledEvents = [new Event("Dining room", true, "2022-05-07T13:43:00+10:00"), new Event("Kitchen", false, "2022-05-07T13:50:00+10:00")];
  // event target from modal trigger button
  areaName:string
  // state to set area to
  state:boolean
  constructor(public modalctrl: ModalController, private dateChecker:DateCheckerService) {  }

  // retrieve event target from modal trigger button
  ngOnInit() {
    this.areaName = this.dateChecker.areaName;
  }

  // set time of event
  setOnTime(dateTime:string){
    console.log(dateTime)
    this.dateTimeToggle = dateTime;
    console.log(this.dateTimeToggle)
  }

  // push events scheduled to scheduling page storage
  close() { 
     this.scheduledEvents.push(new Event(this.areaName, this.state ,this.dateTimeToggle))
     console.log(this.scheduledEvents);
     for(let i in this.scheduledEvents){
       this.dateChecker.scheduledEvents.push(this.scheduledEvents[i])
     }
     console.log(this.dateChecker.scheduledEvents);
     this.modalctrl.dismiss();  
  }  
}
