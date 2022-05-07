import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulingModalPageRoutingModule } from './scheduling-modal-routing.module';

import { SchedulingModalPage } from './scheduling-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulingModalPageRoutingModule
  ],
  declarations: [SchedulingModalPage]
})
export class SchedulingModalPageModule {}
