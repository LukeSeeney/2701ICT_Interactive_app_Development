import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  reminder= new Date().toISOString();

  setOnTime(dateTime:string){
    console.log(dateTime)
    this.reminder = dateTime;
    console.log(this.reminder)
  }
}
