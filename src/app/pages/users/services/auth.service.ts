import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, authState, signInWithRedirect } from '@angular/fire/auth';
import { Auth as AuthFire } from "@firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly googleProvider = new GoogleAuthProvider();

  constructor() { }

  get userState$(){
    return authState(this.auth as AuthFire);
  }

  async signInGoogle(): Promise<void>{
    try {
      await signInWithRedirect(this.auth, this.googleProvider);
    } catch (error) {
      console.log('Google login', error);
    }
  }
}
