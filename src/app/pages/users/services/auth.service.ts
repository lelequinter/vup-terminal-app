import { Injectable, inject } from '@angular/core';
import {
  Auth,
  User,
  authState,
  signInWithRedirect,
  GoogleAuthProvider,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Auth as AuthFire } from "@firebase/auth";

interface ErrorResponse {
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly googleProvider = new GoogleAuthProvider();

  constructor() {
    // this.signOut()
  }

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

  async signUp( email: string, password: string ): Promise<void>{
    try {
      const { user } = await createUserWithEmailAndPassword(this.auth, email, password);
      await this.sendEmailVerfication(user)
      this.router.navigate(['/user/email-verification']);
    } catch (error: unknown) {
      const { code, message } = error as ErrorResponse;

      console.log('Code :', code);
      console.log('Message :', message);
    }
  }

  async signIn( email: string, password: string ): Promise<void>{
    try {
      const { user } = await signInWithEmailAndPassword(this.auth, email, password);
      console.log(user);
      this.checkUserIsVerified(user);
      // this.router.navigate(['/user/profile'])
    } catch (error: unknown) {
      const { code, message } = error as ErrorResponse;

      console.log('Code :', code);
      console.log('Message :', message);
    }
  }

  async signOut(): Promise<void>{
    try {
      await this.auth.signOut();
    } catch (error: unknown) {
      console.log('error: ',error);
    }
  }

  async sendEmailVerfication(user: User): Promise<void>{
    try {
      await sendEmailVerification(user);
    } catch (error: unknown) {
      console.log('error: ',error);
    }
  }

  private checkUserIsVerified(user: User): boolean {

    return true;
  }
}