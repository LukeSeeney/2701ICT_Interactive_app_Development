import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Area, Light } from 'src/app/light';
import { AddAreaPage } from '../add-area/add-area.page';
import { SchedulingModalPage } from '../scheduling-modal/scheduling-modal.page';
import { DateCheckerService } from '../shared/date-checker.service';
import { LightStatusService } from '../shared/light-status.service';
import { StorageService } from '../shared/storage.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-lightarea',
  templateUrl: './lightarea.page.html',
  styleUrls: ['./lightarea.page.scss'],
})

export class LightareaPage implements OnInit {

  // areas in storage
  areas = []

  constructor(public modalctrl:ModalController, private lightservice:LightStatusService, private router: Router, 
  private route: ActivatedRoute, private dateCheckerService:DateCheckerService, private storage: StorageService,
  private userService: UserService) { }

  // show modal to add an area
  async showModal(){  
    const modal = await this.modalctrl.create({  
      component: AddAreaPage,
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5
    });  
    return await modal.present();  
  }  

  // show modal to schedule an area to turn on/off
  async showScheduleModal(area:string){
    const modal = await this.modalctrl.create({  
      component: SchedulingModalPage,
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8
    });  
    this.dateCheckerService.areaSelected(area)
    return await modal.present();  
  }  

  // retrieve areas from light service
  ngOnInit() {
    this.areas = this.lightservice.getAreas()
  }

  // navigate to lights page, pass over area selected
  navToLights(areaName:string){
    this.router.navigate(["lightdisplay"])
    this.lightservice.areaSelected(areaName);
  }

  // push new area to storage
  addArea(name:string){
    this.areas.push(new Area(name));
    this.lightservice.areaStorage = this.areas;
  }

  // toggle powerstate of light input
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
    this.userService.updateUser(this.lightservice.areaStorage)
  }
}
