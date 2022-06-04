import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Area, DailyPower, Light } from 'src/app/light';
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
  async showModal()
  {  
    const modal = await this.modalctrl.create
    ({  
      component: AddAreaPage,
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5
    });  
    return await modal.present();  
  }  

  // show modal to schedule an area to turn on/off
  async showScheduleModal(area:string)
  {
    const modal = await this.modalctrl.create
    ({  
      component: SchedulingModalPage,
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8
    });  
    this.dateCheckerService.areaSelected(area)
    return await modal.present();  
  }  

  // retrieve areas from light service
  ngOnInit() 
  {
    this.areas = this.lightservice.getAreas()
    this.dateCheckerService.ob.subscribe((result) => {
      let areaToChange:any
      for(let i in this.areas)
      {
        if(this.areas[i].areaName == result.area)
        {
          areaToChange = this.areas[i];
          this.powerStateToggle(areaToChange, result.state);
        }
      }
    });
  }

  // navigate to lights page, pass over area selected
  navToLights(areaName:string)
  {
    this.router.navigate(["lightdisplay"])
    this.lightservice.areaSelected(areaName);
  }

  // push new area to storage
  addArea(name:string)
  {
    this.areas.push(new Area(name));
    this.lightservice.areaStorage = this.areas;
  }
  
  // remove area upon remove button being clicked
  removeArea(area:string)
  {
    console.log(area)
    for(let i in this.areas){  
      if(this.areas[i].areaName == area)
      {
        this.areas.splice(this.areas.indexOf(this.areas[i]), 1);
        // console.log(this.areas)
        this.lightservice.areaStorage = this.areas;
      }
    }
    this.userService.updateUser(this.lightservice.areaStorage)
  }

  // toggle powerstate of light input
  powerStateToggle(area:any,state:boolean)
  {
    for(let e in this.areas){
      if(this.areas[e] == area){
        if(this.areas[e].switch != state){
          this.areas[e].switch = state;
        }
        for(let i in this.areas[e].lights){
          // change power state for relevant lights in area
          this.areas[e].lights[i].powerState = state;if(state == true)
          {
            console.log(state);
            this.areas[e].lights[i].onTime = new Date();
            this.areas[e].lights[i].offTime = null;
            console.log(this.areas[e].lights[i])
          }
          else if(state == false)
          {
            console.log(state);
            this.areas[e].lights[i].offTime = new Date();
            console.log(this.areas[e].lights[i])
            this.areas[e].lights[i].timeOn = this.areas[e].lights[i].offTime.getTime() - this.areas[e].lights[i].onTime.getTime();
            console.log("Time on: " + this.areas[e].lights[i].timeOn + "ms");
            this.areas[e].lights[i].dailyPower.push(
              new DailyPower(this.areas[e].lights[i].onTime, this.areas[e].lights[i].offTime, this.areas[e].lights[i].wattage)
            );
            this.areas[e].dailyPower.push(this.areas[e].lights[i].dailyPower)
            console.log(this.areas[e].dailyPower)
            
            // add power consumed to each day
          }
        }
        // pass back power state that has now been changed
        this.lightservice.areaStorage = this.areas;
      }
    }
    this.userService.updateUser(this.lightservice.areaStorage)
  }

}
