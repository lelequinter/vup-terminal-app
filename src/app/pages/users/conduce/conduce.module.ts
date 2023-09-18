import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConduceRoutingModule } from './conduce-routing.module';
import { ConduceComponent } from './conduce.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConduceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConduceRoutingModule,
  ]
})
export class ConduceModule { }
