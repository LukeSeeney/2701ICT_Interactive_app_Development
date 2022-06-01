import { Injectable } from '@angular/core';
import { Area } from 'src/app/light';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {
  // user data for saving upon data changing
  username:string;
  password:string;
  userData:any;
  // area selected
  areaName:string;
  // all areas stored
  areaStorage = []

  // setting some starter data when initialised
  constructor() {
    this.areaStorage = []
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

  updateAreas(areas:any){
    
    // this.userData = user.areas;
  }

  updateLights(areaName:string, lights:any){
    for(let areas of this.areaStorage){
      if(areaName == areas.areaName){
        areas.lights = lights
        // console.log(this.areaStorage)
      }
    } 
  }
}

