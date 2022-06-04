import { Component } from '@angular/core';
import { Storage } from "@ionic/storage-angular"
import { Area } from './light';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private storage:Storage) {
    this.storage.create();
    // this.storage.clear();
    this.initialise();
  }

  async initialise(){
    if (await this.storage.get("users") == null){
      await this.storage.set("users", [
        {username:"asd", password:"asd", areas:[new Area("Home")], schedule:[], powerData:[20, 40, 60, 80, 100, 120, 140, 160]}, 
        {username:"admin", password:"admin",areas:[new Area("Home")], schedule:[], powerData:[20, 40, 60, 80, 100, 120, 140, 160]}
      ]);
    }
  }
}
