import { Injectable } from '@angular/core';
import { Area, Light } from 'src/app/light';

@Injectable({
  providedIn: 'root'
})
export class LightStatusService {

  constructor(private area:Area, private light:Light) { }

  areaStorage = this.area

getLightsInArea(area){
  
}
addLight(light){

}
}
