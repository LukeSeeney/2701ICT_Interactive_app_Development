import { Component, OnInit } from '@angular/core';
import { Light } from 'src/app/light';
import { LightStatusService } from '../shared/light-status.service';

@Component({
  selector: 'app-lightdisplay',
  templateUrl: './lightdisplay.page.html',
  styleUrls: ['./lightdisplay.page.scss'],
})
export class LightdisplayPage implements OnInit {
lights = []Light
  constructor(private lightservice:LightStatusService) { }

  ngOnInit() {
    this.lights = this.lightservice.getLightsInArea(this.lightservice.areaStorage[0])
  }

}
