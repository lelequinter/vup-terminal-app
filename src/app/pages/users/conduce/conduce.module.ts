import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConduceRoutingModule } from './conduce-routing.module';
import { ConduceComponent } from './conduce.component';


@NgModule({
  declarations: [
    ConduceComponent
  ],
  imports: [
    CommonModule,
    ConduceRoutingModule
  ]
})
export class ConduceModule { }
