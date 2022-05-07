import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCheckerService
{
  public dateRefresh: String;
  public currentDate: String;
  constructor() 
  {
      this.dateRefresh = (new Date()).toISOString();
      this.currentDate = this.dateRefresh;
  };

  checkDateTime(dateTime:string){
    if(this.currentDate == dateTime){
      return true;
    }
    else{
      return false
    }
  }
}
