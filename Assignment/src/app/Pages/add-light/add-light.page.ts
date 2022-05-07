import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LightStatusService } from '../shared/light-status.service';
import { Area, Light } from 'src/app/light';

@Component({
  selector: 'app-add-light',
  templateUrl: './add-light.page.html',
  styleUrls: ['./add-light.page.scss'],
})
export class AddLightPage implements OnInit {

  constructor(public modalctrl: ModalController, private lightservice:LightStatusService) { }

  lightName:string 
  areaName:string = this.lightservice.areaName;
  lights = [];

  ngOnInit() {
    this.lights = this.lightservice.getLightsInArea(this.areaName);
  }

  close() { 
    if(this.lightName == ""){ 
      console.log("butts")
      this.modalctrl.dismiss(); 
    }
    for(let areaL of this.lightservice.areaStorage){
          if(areaL.areaName == this.areaName ){
            this.lights.push(new Light(this.lightName, false, 100));
          }
        }
    console.log(this.lights)
    this.modalctrl.dismiss();  
  }  
}
