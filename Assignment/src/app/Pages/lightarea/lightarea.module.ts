import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightareaPageRoutingModule } from './lightarea-routing.module';

import { LightareaPage } from './lightarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightareaPageRoutingModule
  ],
  declarations: [LightareaPage]
})
export class LightareaPageModule {}
