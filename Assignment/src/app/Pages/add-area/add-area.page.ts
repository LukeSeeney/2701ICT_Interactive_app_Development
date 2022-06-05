import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Area } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit { 
  
  constructor(public modalctrl: ModalController, private lightservice:LightStatusService, private userService: UserService) {}  

  areaName:string;

  ngOnInit() {  
  }  

  // upon pressing create button, push a new area with name in input field
  close() { 
    if(this.areaName == ""){ 
      this.modalctrl.dismiss(); 
    }
    this.lightservice.areaStorage.push(new Area(this.areaName));
    this.userService.updateUser(this.lightservice.areaStorage)
    this.modalctrl.dismiss();  
  }  
}  