import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '@angular/fire/auth';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent {
  user: User | null = null;
  private readonly authSvc = inject(AuthService);

  constructor(){
    this.authSvc.userState$
    .pipe(
      filter((authState) => authState !== null),
      tap((user) => this.user = user),
      tap(() => this.authSvc.signOut())
    )
    .subscribe();
  }

  onResendEmail(): void {
    if( this.user ){
      this.authSvc.sendEmailVerfication(this.user);
    }
  }
}
