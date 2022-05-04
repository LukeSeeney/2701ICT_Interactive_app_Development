import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LightdisplayPageRoutingModule } from './lightdisplay-routing.module';
import { LightdisplayPage } from './lightdisplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightdisplayPageRoutingModule
  ],
  declarations: [LightdisplayPage]
})
export class LightdisplayPageModule {}
