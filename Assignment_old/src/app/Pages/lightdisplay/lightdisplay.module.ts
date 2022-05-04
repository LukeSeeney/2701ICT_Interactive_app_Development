import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightdisplayPageRoutingModule } from './lightdisplay-routing.module';

import { LightdisplayPage } from './lightdisplay.page';
import { LightsComponent } from '../shared/lights/lights.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightdisplayPageRoutingModule
  ],
  declarations: [LightdisplayPage,LightsComponent]
})
export class LightdisplayPageModule {}
