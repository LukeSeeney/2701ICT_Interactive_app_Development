import { Injectable } from '@angular/core';
import { Area } from 'src/app/light';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {

  areaStorage = [new Area(), new Area()]

  constructor() { }

  getLightsInArea(area){
    for(let areaL of this.areaStorage){
      if(areaL.areaName == area ){
        return areaL
      }
    }
  }
}
