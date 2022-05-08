import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Area } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit { 
  
  constructor(public modalctrl: ModalController, private lightservice:LightStatusService) {}  

  areaName:string;

  ngOnInit() {  
  }  

  // upon pressing create button, push a new area with name in input field
  close() { 
    if(this.areaName == ""){ 
      console.log("butts")
      this.modalctrl.dismiss(); 
    }
    this.lightservice.areaStorage.push(new Area(this.areaName));
    this.modalctrl.dismiss();  
  }  
}  