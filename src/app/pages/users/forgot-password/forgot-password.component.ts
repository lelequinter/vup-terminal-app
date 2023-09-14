import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  isEmailSent: boolean = false;
  private authSvc = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly emailPattern: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  })


  async onSubmit(): Promise<void>{
    try {
      this.isEmailSent = true;
      await this.authSvc.sendPasswordResetEmail(this.form.get('email')?.value);
    } catch (error: unknown) {
      this.isEmailSent = false;
      console.log('Error :', error);
    }
  }

  hasError(field: string){
    const fieldName = this.form.get(field);
    return Boolean(fieldName?.invalid && fieldName?.touched);
  }
}
