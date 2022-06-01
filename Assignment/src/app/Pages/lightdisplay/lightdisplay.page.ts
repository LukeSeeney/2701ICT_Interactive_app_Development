import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Light } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';
import { ModalController } from '@ionic/angular';
import { AddLightPage } from '../add-light/add-light.page';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-lightdisplay',
  templateUrl: './lightdisplay.page.html',
  styleUrls: ['./lightdisplay.page.scss'],
})
export class LightdisplayPage implements OnInit {

  // slider value storage
  sliders = [];
  slider = document.getElementById("light.lightName");
  sliderBrightness:number;
  // imported area
  areaName:string;
  // lights in inmported area
  lights = [];

  constructor(public modalctrl:ModalController, private lightservice:LightStatusService, private userService: UserService) {  }

  // show modal to add a light
  async showModal() {  
    const modal = await this.modalctrl.create({  
      component: AddLightPage,
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5
    });  
    return await modal.present();  
  }  

  // import area name and lights contained in it from light service
  ngOnInit() {
    this.areaName = this.lightservice.areaName;
    this.lights = this.lightservice.getLightsInArea(this.areaName);
  }

  checkboxEvent(){
    this.lightservice.updateLights(this.areaName, this.lights)
    this.userService.updateUser(this.lightservice.areaStorage)
  }
  // retrieve value of individual sliders
  getSliderValue(event:any = 0){
    this.sliderBrightness = event.target.valueAsNumber;
    // console.log(event.target.valueAsNumber);
    // console.log(this.lights);
    this.lightservice.updateLights(this.areaName, this.lights)
    this.userService.updateUser(this.lightservice.areaStorage)
  }

  // set brightness of lights from its assigned slider value
  ngAfterViewInit(){
    for(let light in this.lights){
    var slider = this.lights[light].brightness;
    this.sliders.push(slider);
    }
  }
}
