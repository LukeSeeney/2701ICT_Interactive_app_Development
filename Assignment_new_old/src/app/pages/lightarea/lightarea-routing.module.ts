import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightareaPage } from './lightarea.page';

const routes: Routes = [
  {
    path: '',
    component: LightareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightareaPageRoutingModule {}
