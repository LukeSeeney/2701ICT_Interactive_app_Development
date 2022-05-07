import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddAreaPageRoutingModule } from './add-area-routing.module';
import { AddAreaPage } from './add-area.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  {  
    path: '',  
    component: AddAreaPage  
  }  
];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAreaPageRoutingModule
  ],
  declarations: [AddAreaPage]
})
export class AddAreaPageModule {}
