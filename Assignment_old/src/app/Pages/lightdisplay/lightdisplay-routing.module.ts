import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightdisplayPage } from './lightdisplay.page';

const routes: Routes = [
  {
    path: '',
    component: LightdisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightdisplayPageRoutingModule {}
