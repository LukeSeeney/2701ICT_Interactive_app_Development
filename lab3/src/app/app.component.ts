import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private storage:Storage) {
    this.storage.create();
    this.initialise()
  }

  async initialise(){
    if (await this.storage.get("settings") == null){
      await this.storage.set("settings",{name:"Bob", showNotif:true, reminder:new Date().toISOString()})
    }

  }
}
