import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const actionType = {
  signIn: {
    action: 'signIn',
    title: 'Sign In'
  },
  signUp: {
    action: 'signUp',
    title: 'Sign Up'
  },
} as const;

type ActionType = keyof typeof actionType;

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() action!: ActionType;
  form!: FormGroup;
  title!: string;

  private readonly fb = inject(FormBuilder);
  private readonly emailPattern = '';

  ngOnInit(): void {
    this.title =
    this.action === actionType.signIn.action
    ? actionType.signIn.title
    : actionType.signUp.title;

    this.initForm();
  }

  onSubmit(): void {
    const {email, password} = this.form.value;

    this.action === actionType.signIn.action
    ? 'signIn'
    : 'signUp';
  }

  hasError( field: string ): boolean {
    const fieldName = this.form.get(field);
    return Boolean(fieldName?.invalid && fieldName?.touched);
  }

  signInGoogle(): void {
    //TODO
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
}
