import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private readonly router = inject(Router);
  private readonly authSvc = inject(AuthService);

  user$!: Observable<User | null>;
  user: User | null = null;
  avatarText: string = '-';
  lastLogin: string = '';

  constructor(){
    this.user$ = this.authSvc.userState$;

    this.user$.subscribe({
      next: (user) => {
        this.user = user;
        console.log(this.user);
        this.lastLogin = formatDate(this.user?.metadata.lastSignInTime || '', 'dd-MMM-yyyy  hh:mm a', 'en_US') || '';
        this.avatarText = this.user?.displayName?.substring(0,1) || '-';
      }
    })
  }

  async onSignOut(): Promise<any>{
    await this.authSvc.signOut();
    this.router.navigate(['/user/sign-in']);
  }
}
