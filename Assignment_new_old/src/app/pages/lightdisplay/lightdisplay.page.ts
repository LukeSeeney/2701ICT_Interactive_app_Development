import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Light} from '../../light'
import { LightStatusService } from '../shared/light-status.service';

@Component({
  selector: 'app-lightdisplay',
  templateUrl: './lightdisplay.page.html',
  styleUrls: ['./lightdisplay.page.scss'],
})
export class LightdisplayPage implements OnInit {
lights: any
  constructor(private lightservice:LightStatusService, private modalController: ModalController) { }

  ngOnInit() {
    this.lights = this.lightservice.getLightsInArea(this.lightservice.areaStorage)
  }
  async addLightsModal(){
    // this.lightservice.addLight()
    
  }
}
