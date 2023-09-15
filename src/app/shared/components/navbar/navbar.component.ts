import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@app/pages/users/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user$!: Observable<User | null>;
  private readonly router = inject(Router);
  private readonly authSvc = inject(AuthService);

  constructor(){
    this.user$ = this.authSvc.userState$;
  }

  async onSignOut(): Promise<any>{
    await this.authSvc.signOut();
    this.router.navigate(['/user/sign-in']);
  }
}
