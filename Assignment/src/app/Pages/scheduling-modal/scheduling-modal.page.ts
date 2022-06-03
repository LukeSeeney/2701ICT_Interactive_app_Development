import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Area } from 'src/app/light';
import { Event } from 'src/app/event';
import { DateCheckerService } from '../shared/date-checker.service';
import { SchedulingPage } from '../scheduling/scheduling.page';
import { UserService } from '../shared/user.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-scheduling-modal',
  templateUrl: './scheduling-modal.page.html',
  styleUrls: ['./scheduling-modal.page.scss'],
})

export class SchedulingModalPage implements OnInit 
{
  // date and time of schedule
  dateTimeToggle= new Date();
   // scheduled event storage
  scheduledEvents = [];
  // event target from modal trigger button
  areaName:string
  // state to set area to
  state = false;
  constructor(public modalctrl: ModalController,private localNotifications: LocalNotifications, private dateChecker:DateCheckerService, private userService: UserService) {  }

  // retrieve event target from modal trigger button
  ngOnInit() 
  {
    this.areaName = this.dateChecker.areaName;
  }

  // set time of event
  setOnTime(dateTime:Date)
  {
    console.log(dateTime)
    this.dateTimeToggle = dateTime;
    console.log(this.dateTimeToggle)
  }

  
  // push events scheduled to scheduling page storage and use scheduling plugin to perform the scheduled event
  close() 
  { 
    // schedule notification plugin with function
    this.localNotifications.schedule([
    {
      title:"Scheduled Light toggle",
      trigger: {at: this.dateTimeToggle},
      foreground: true
    }]);
    // add scheduled event to data to for scheduling page to display
    this.scheduledEvents.push(new Event(this.areaName, this.state ,this.dateTimeToggle))
    for(let i in this.scheduledEvents){
      this.dateChecker.scheduledEvents.push(this.scheduledEvents[i])
    }
    console.log(this.dateChecker.scheduledEvents);
    this.userService.updateSchedule(this.dateChecker.scheduledEvents)
    this.modalctrl.dismiss();  
  }  
}

