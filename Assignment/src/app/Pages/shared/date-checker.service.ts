import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCheckerService
{
  public dateRefresh: String;
  public currentDate: String;
  areaName:string
  scheduledEvents = []
  constructor() 
  {
      this.dateRefresh = (new Date()).toISOString();
      this.currentDate = this.dateRefresh;
      
  };

  areaSelected(area:string){
    this.areaName = area;
  }

  checkDateTime(dateTime:string){
    if(this.currentDate == dateTime){
      return true;
    }
    else{
      return false
    }
  }
}
