import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

//* Otras librerias
import { NzTableModule } from "ng-zorro-antd/table";
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
