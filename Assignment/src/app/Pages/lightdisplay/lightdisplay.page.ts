import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Light } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';

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

  constructor(private lightservice:LightStatusService) {  }

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
