import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Light } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';
import { ModalController } from '@ionic/angular';
import { AddLightPage } from '../add-light/add-light.page';

@Component({
  selector: 'app-lightdisplay',
  templateUrl: './lightdisplay.page.html',
  styleUrls: ['./lightdisplay.page.scss'],
})
export class LightdisplayPage implements OnInit {

  sliders = [];
  slider = document.getElementById("light.lightName");
  sliderBrightness:number;
  areaName:string;
  lights = [];

  constructor(public modalctrl:ModalController, private lightservice:LightStatusService) {  }

  async showModal() {  
    const modal = await this.modalctrl.create({  
      component: AddLightPage,
      breakpoints: [0, 0.3, 0.5],
      initialBreakpoint: 0.5
    });  
    return await modal.present();  
  }  

  ngOnInit() {
    this.areaName = this.lightservice.areaName;
    this.lights = this.lightservice.getLightsInArea(this.areaName);
  }

  getSliderValue(event:any = 0){
    this.sliderBrightness = event.target.valueAsNumber;
    console.log(event.target.valueAsNumber);
    console.log(this.lights);
  }

  ngAfterViewInit(){
   for(let light in this.lights){
    var slider = this.lights[light].brightness;
    this.sliders.push(slider);
   }
  }
}
