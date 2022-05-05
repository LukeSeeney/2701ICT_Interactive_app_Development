import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightComponent } from './light/light.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LightComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LightComponent]
})
export class SharedModule { }
