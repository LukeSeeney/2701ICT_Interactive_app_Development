import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightsComponent } from './lights/lights.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LightsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LightsComponent]
})
export class SharedModule { }
