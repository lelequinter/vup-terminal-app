import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ErrorMessageComponent } from '@app/shared/auth-form/components/error-message/error-message.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
    ForgotPasswordRoutingModule,
  ]
})
export class ForgotPasswordModule { }
