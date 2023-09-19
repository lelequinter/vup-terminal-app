import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConduceRoutingModule } from './conduce-routing.module';
import { ConduceComponent } from './conduce.component';
import { ReactiveFormsModule } from '@angular/forms';

//* Otras librerias
import { NgxMaskModule } from "ngx-mask";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzNotificationModule } from 'ng-zorro-antd/notification';

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
    NzNotificationModule,
    NgxMaskModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConduceModule { }
