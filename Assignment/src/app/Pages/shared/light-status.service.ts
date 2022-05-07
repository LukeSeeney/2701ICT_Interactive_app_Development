import { Injectable } from '@angular/core';
import { Area } from 'src/app/light';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {

  areaName:string;
  areaStorage = []

  constructor() {
    this.areaStorage = [new Area("Office"), new Area("Living room"),new Area("Dining room"), new Area("Kitchen")]
  }

  getLightsInArea(area){
    for(let areaL of this.areaStorage){
      console.log(areaL);
      if(areaL.areaName == area ){
        return areaL.lights
      }
    }
  }
  getAreas(){
    return this.areaStorage;
  }

  areaSelected(area:string){
    this.areaName = area;
  }
}
