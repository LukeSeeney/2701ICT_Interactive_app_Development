import { Injectable } from '@angular/core';
import { Area } from 'src/app/light';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {
  // area selected
  areaName:string;
  // all areas stored
  areaStorage = []

  // setting some starter data when initialised
  constructor() {
    this.areaStorage = [new Area("Office"), new Area("Living room"),new Area("Dining room"), new Area("Kitchen")]
  }

  // retrieve lights in an area when given an area name
  getLightsInArea(area:any){
    for(let areaL of this.areaStorage){
  //    console.log(areaL);
      if(areaL.areaName == area ){
        return areaL.lights
      }
    }
  }
  // send areas stored to other sections of the app
  getAreas(){
    return this.areaStorage;
  }

  // import area selected
  areaSelected(area:string){
    this.areaName = area;
  }
}
