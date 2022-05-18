import { Component } from '@angular/core';
import { Storage } from "@ionic/storage-angular"
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  setting:any
  
  constructor(private storage: Storage, private storageService:StorageService) {
    this.storageService.get("settings").then((val) => {
      console.log(val)
      this.setting = val;
      console.log(this.setting)
    });
  }

  setName(setting:string){
    this.setting.name = setting;
    console.log(this.setting.name)
    this.storageService.store("settings", this.setting)
  }

  setNotif(setting:boolean){
    this.setting.showNotif = setting;
    console.log(this.setting.showNotif)
    this.storageService.store("settings", this.setting)
  }

  setReminder(setting:string){
    this.setting.reminder = setting;
    console.log(this.setting.reminder)
    this.storageService.store("settings", this.setting)
  }

  clearSettings(){
    this.storageService.clear();
    this.storageService.emptySettings();
    this.storageService.get("settings").then((val) => {
      console.log(val)
      this.setting = val;
      console.log(this.setting)
    });
  }
}
