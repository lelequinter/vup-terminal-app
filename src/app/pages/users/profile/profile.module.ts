import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

//* Otras librearias
import { NzAvatarModule } from "ng-zorro-antd/avatar";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NzAvatarModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
