import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConduceRoutingModule } from './conduce-routing.module';
import { ConduceComponent } from './conduce.component';
import { ReactiveFormsModule } from '@angular/forms';

//* Directivas
import { DirectivesModule } from '@app/shared/directives/directives.module';

//* Otras librerias
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxMaskModule } from "ngx-mask";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    ConduceComponent,
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    DirectivesModule,
    NzTimePickerModule,
    ReactiveFormsModule,
    ConduceRoutingModule,
    NzNotificationModule,
    NgxMaskModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConduceModule { }
