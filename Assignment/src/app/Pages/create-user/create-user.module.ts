import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateUserPageRoutingModule } from './create-user-routing.module';
import { CreateUserPage } from './create-user.page';
import { RegistryModule } from '../shared/registry/Registry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RegistryModule,
    CreateUserPageRoutingModule
  ],
  declarations: [CreateUserPage]
})
export class CreateUserPageModule {}
