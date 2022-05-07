import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Area, Light } from 'src/app/light';
import { AddAreaPage } from '../add-area/add-area.page';
import { LightStatusService } from '../shared/light-status.service';

@Component({
  selector: 'app-lightarea',
  templateUrl: './lightarea.page.html',
  styleUrls: ['./lightarea.page.scss'],
})

export class LightareaPage implements OnInit {

  areas = []

  constructor(public modalctrl:ModalController, private lightservice:LightStatusService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.areas = this.lightservice.getAreas()
  }

  async showModal() {  
    const modal = await this.modalctrl.create({  
      component: AddAreaPage,
      breakpoints: [0, 0.3, 0.5],
      initialBreakpoint: 0.5
    });  
    return await modal.present();  
  }  

 navToLights(areaName:string){
    this.router.navigate(["lightdisplay"])
    this.lightservice.areaSelected(areaName);
  }

  addArea(name:string){
    this.areas.push(new Area(name));
    this.lightservice.areaStorage = this.areas;

  }

  powerStateToggle(area:any,state:boolean){
    for(let e in this.areas){
      if(this.areas[e] == area){
        for(let i in this.areas[e].lights){
          // change power state for relevant lights in area
          this.areas[e].lights[i].powerState = state;
        }
        // pass back power state that has now been changed
        this.lightservice.areaStorage = this.areas;
      }
    }
  }
}
