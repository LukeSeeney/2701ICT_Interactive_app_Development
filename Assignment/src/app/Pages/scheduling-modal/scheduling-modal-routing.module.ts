import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulingModalPage } from './scheduling-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulingModalPageRoutingModule {}
