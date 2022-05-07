import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Area, Light } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';

@Component({
  selector: 'app-lightarea',
  templateUrl: './lightarea.page.html',
  styleUrls: ['./lightarea.page.scss'],
})

export class LightareaPage implements OnInit {

  areas = []

  constructor(private lightservice:LightStatusService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.areas = this.lightservice.getAreas()
  }

 navToLights(areaName:string){
    this.router.navigate(["lightdisplay"])
    this.lightservice.areaSelected(areaName);
  }

  addArea(name:string){
    this.areas.push(new Area(name));
    this.lightservice.areaStorage = this.areas;

  }

  powerStateToggle(area:any){
    for(let e in this.areas){
      if(this.areas[e] == area){
        for(let i in this.areas[e].lights){
          // change power state for relevant lights in area
          if(this.areas[e].lights[i].powerState == true){
            this.areas[e].lights[i].powerState = false;
          }else{
          this.areas[e].lights[i].powerState = true;
          }
        }
        // pass back power state that has now been changed
        this.lightservice.areaStorage = this.areas;
      }
    }
  }
}
