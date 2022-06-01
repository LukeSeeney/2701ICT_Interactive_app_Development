import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCheckerService
{
  // current date and time
  public dateRefresh: String;
  public currentDate: String;
  // area target imported from scheduling modal
  areaName:string
  // events imported from scheduling modal
  scheduledEvents = []
  constructor() 
  {
      // constantly setting current date and time to system time
      this.dateRefresh = (new Date()).toISOString();
      this.currentDate = this.dateRefresh;
  };

  // importing area target from scheduling modal
  areaSelected(area:string){
    this.areaName = area;
  }

  // function to check if scheduled event time has been triggered
  checkDateTime(dateTime:string){
    if(this.currentDate == dateTime){
      return true;
    }
    else{
      return false
    }
  }
}
