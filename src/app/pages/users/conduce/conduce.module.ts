import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConduceRoutingModule } from './conduce-routing.module';
import { ConduceComponent } from './conduce.component';
import { ReactiveFormsModule } from '@angular/forms';

//* Otras librerias
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    ConduceComponent
  ],
  imports: [
    CommonModule,
    NzSelectModule,
    NzTimePickerModule,
    ReactiveFormsModule,
    ConduceRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConduceModule { }
