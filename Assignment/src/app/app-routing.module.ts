import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lightdisplay',
    loadChildren: () => import('./pages/lightdisplay/lightdisplay.module').then( m => m.LightdisplayPageModule)
  },
  {
    path: 'lightarea',
    loadChildren: () => import('./pages/lightarea/lightarea.module').then( m => m.LightareaPageModule)
  },
  {
    path: 'scheduling',
    loadChildren: () => import('./pages/scheduling/scheduling.module').then( m => m.SchedulingPageModule)
  },  {
    path: 'add-area',
    loadChildren: () => import('./pages/add-area/add-area.module').then( m => m.AddAreaPageModule)
  },
  {
    path: 'add-light',
    loadChildren: () => import('./pages/add-light/add-light.module').then( m => m.AddLightPageModule)
  },
  {
    path: 'scheduling-modal',
    loadChildren: () => import('./pages/scheduling-modal/scheduling-modal.module').then( m => m.SchedulingModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
