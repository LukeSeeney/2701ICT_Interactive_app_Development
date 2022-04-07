import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  login()
  {
    
  }

  loginAttempts:number = 0;

  loginAttemptCounter()
  {
    this.loginAttempts++;
  }
  
  constructor() {}

}
