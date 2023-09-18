import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConduceComponent } from './conduce.component';

const routes: Routes = [{ path: '', component: ConduceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConduceRoutingModule { }
