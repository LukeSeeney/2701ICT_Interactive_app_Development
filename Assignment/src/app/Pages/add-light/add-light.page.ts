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

  // variables to import the area being adited
  lightName:string
  lightWattage:number
  areaName:string = this.lightservice.areaName;
  lights = [];

  // import area assigned
  ngOnInit() {
    this.lights = this.lightservice.getLightsInArea(this.areaName);
  }

  // upon pressing create button, close modal and add light with name input
  close() { 
    if(this.lightName == ""){ 
      this.modalctrl.dismiss(); 
    }
    for(let areaL of this.lightservice.areaStorage){
          if(areaL.areaName == this.areaName ){
            this.lights.push(new Light(this.lightName, false, 100, this.lightWattage));
          }
        }
    console.log(this.lights)
    this.modalctrl.dismiss();  
  }  
}
