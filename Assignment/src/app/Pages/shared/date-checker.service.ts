import { Injectable, } from '@angular/core';
import { UserService } from './user.service';
import { Subscription, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateCheckerService
{
  // current date and time
  public currentDate = new Date().toISOString();
  // time difference
  public timeDifference: any;
  // area target imported from scheduling modal
  areaName:string
  // events imported from scheduling modal
  scheduledEvents = []
  eventSubscription: Subscription
  // observable to call function in area page
  private areaChOb = new Subject<any>();
  ob = this.areaChOb.asObservable();
  
  constructor(private userService:UserService) 
  {
    // retrieving scheduled events from storage upon login
    this.scheduledEvents = this.userService.schedule;
    // checking scheduled events for any that are ready to be executed
    this.eventSubscription = interval(1000).subscribe(x => 
      { this.getTimeDifference(); });
  };

  private getTimeDifference ()
  {
    for(let i in this.scheduledEvents)
    {
      // time difference between scheduled times
      this.timeDifference = this.scheduledEvents[i].time.getTime() - new  Date().getTime();
      // if scheduled event time has occured, perform event action and remove from scheduled events
      if(this.checkDateTime(this.timeDifference) == true){
        this.lightAreaPowerStateToggle(this.scheduledEvents[i])
        this.scheduledEvents.splice(this.scheduledEvents[i]);
      }
    }
  }

  lightAreaPowerStateToggle(event:any) {
    this.areaChOb.next(event);
  }

  // function to check if scheduled event time has been triggered
  checkDateTime(dateTime:any)
  {
    if(dateTime <= 0){
      return true;
    }
    else{
      return false
    }
  }

  ngOnDestroy() {
    for(let i in this.eventSubscription)
    {
      this.eventSubscription[i].unsubscribe();
    }
  }

  // importing area target from scheduling modal
  areaSelected(area:string){
    this.areaName = area;
  }

  timerEvent(){

  }
}
