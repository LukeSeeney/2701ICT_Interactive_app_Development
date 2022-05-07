import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Light } from 'src/app/light';
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
  powerStateToggle(area){
    for(let e in this.areas){
      console.log(e);
      if(this.areas[e] == area){
        console.log("it worky")
      }else{
          return
      }
      console.log(this.areas)
    }
  }
}
